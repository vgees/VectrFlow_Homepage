import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 850px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    background-color: white;
    transform: ${({ open }) => open ? 'translateX (0)' : 'translateX(-150%)'};

    position:absolute;
    height: 65vh;
    width:100%;
    top:60px;
    left:0;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .navbar-link{
        color:black;
        padding-bottom:100px;

    }

    
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Link to="/AboutUs" className="navbar-link">
                About Us
            </Link>
            <Link to="https://docs.vectrflow.com/" className="navbar-link" target="_blank">
                Documentation
            </Link>
            <Link to="/pricing" className="navbar-link">
                Pricing
            </Link>
        </Ul>
    )
}

export default RightNav