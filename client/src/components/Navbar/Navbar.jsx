import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="brand">
                        <Link className="link" to="/">NOUVeau</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Children</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Accesories</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="icons">
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteIcon />
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open  && <Cart/>}
        </div>
    );
};
3;
export default Navbar;
