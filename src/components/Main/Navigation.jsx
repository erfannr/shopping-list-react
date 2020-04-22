import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-5">
                    <h3 className="text-capitalize text-center">Shopping List</h3>
                    <ul>
                        <li>
                            <Link to="/TodoList">ShoppingList</Link>
                        </li>
                        <li>
                            <Link to="/signin">Masuk</Link>
                        </li>
                        <li>
                            <Link to="/signup">Daftar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;