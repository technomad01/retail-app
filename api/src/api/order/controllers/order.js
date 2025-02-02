("use strict");
// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
         try {
           // @ts-ignore
           const { products } = ctx.request.body;

           // Validate products
           if (!products || !Array.isArray(products) || products.length === 0) {
             ctx.response.status = 400;
             return { error: "No products provided or invalid format" };
           }

           // Create line items for Stripe session
           const lineItems = await Promise.all(
             products.map(async (product) => {
               const item = await strapi
                 .service("api::product.product")
                 .findOne(product.id);

               if (!item) {
                 ctx.response.status = 404;
                 return { error: `Product with id ${product.id} not found` };
               }

               return {
                 price_data: {
                   currency: "usd",
                   product_data: {
                     name: item.title,
                   },
                   unit_amount: Math.round(item.price * 100),
                 },
                 quantity: product.quantity,
               };
             })
           );

           if (lineItems.includes(null)) {
             return; // Appropriate response already sent in the map function
           }

           // Create Stripe session
           const session = await stripe.checkout.sessions.create({
             mode: "payment",
             success_url: process.env.CLIENT_URL + "?success=true",
             cancel_url: process.env.CLIENT_URL + "?success=false",
             line_items: lineItems,
             shipping_address_collection: {
               allowed_countries: ["MY", "KW"],
             },
             payment_method_types: ["card"],
           });

           // Save the order in Strapi
           await strapi.service("api::order.order").create({
             data: {
               products,
               stripeId: session.id,
             },
           });

           // Return the Stripe session
           return { stripeSession: session };
         } catch (err) {
           ctx.response.status = 500;
           console.log(err);
           return { err };
         }
  },
}));
