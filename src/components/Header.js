import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const HeaderDiv = styled.div`
    /* background-color: black; */
`

const Header = () => {
    return(
            <Link to="/">
                <h3>Home</h3>
            </Link>
    )
}

export default Header;