import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt Mania</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderReview">OrderReview</Link>
                <Link to="/grandpa">Grandpa</Link>

                {/* <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderReview">OrderReview</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink> */}
            </nav>
        </div>
    );
};

export default Header;