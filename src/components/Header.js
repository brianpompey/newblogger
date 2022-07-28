import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import styled from "styled-components";


const HeaderDiv = styled.div`
    /* background-color: black; */
`

const Header = () => {
    return(
        <div className='header-main'>
            <Link to="/">
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Header;