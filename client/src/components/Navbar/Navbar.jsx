import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
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
                <div className="center">
                    <span>NOUVeau</span>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/about">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/contact">Contact</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteIcon />
                        <div className="cartIcon">
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
3;
export default Navbar;
