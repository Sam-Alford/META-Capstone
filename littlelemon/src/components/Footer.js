import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import footerlogo from '../assets/footerlogo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(4,minmax(0,1fr))">
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="40px"
            justifyContent="flex-start"
            alignItems="center"
            maxWidth="200px"
            height="auto"
            >
                    <img
                        className="footerlogo"
                        src={footerlogo}
                        alt="Little Lemon Logo"
                    />
            </Flex>
        </Box>
        <Box backgroundColor="#D9D9D9">
            <Flex
                margin="40px"
                px={12}
                color="white"
                justifyContent="flex-start"
                alignItems="center"
                maxWidth="1024px"
                height="auto"
            >
                <div>
                    <div className="footerTitle">
                        Doormat Navigation
                    </div>
                    <div>
                        <ul><Link to="/" className="navFooter">Home</Link></ul>
                        <ul><Link to="/about-us"className="navFooter">About</Link></ul>
                        <ul><Link to="/menu"className="navFooter">Menu</Link></ul>
                        <ul><Link to="/reservations"className="navFooter">Reservations</Link></ul>
                        <ul><Link to="/order" className="navFooter">Order Online</Link></ul>
                        <ul><Link to="/login" className="navFooter">Login</Link></ul>
                    </div>
                </div>
            </Flex>
        </Box>
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="40px"
            px={12}
            color="white"
            justifyContent="flex-start"
            alignItems="center"
            maxWidth="1024px"
            height="auto"
            >
                <div>
                    <div className="footerTitle">
                        Contact
                    </div>
                    <div className="navFooter">
                        <ul>123 Fake St</ul>
                        <ul>(212) 555-1234</ul>
                        <ul><Link to="mailto:">LittleLemon@notreal.com</Link></ul>
                    </div>
                </div>
            </Flex>
        </Box>
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="40px"
            px={12}
            color="white"
            justifyContent="flex-start"
            alignItems="center"
            maxWidth="1024px"
            height="auto"
            >
                <div>
                    <div className="footerTitle">
                        Social Media Links
                    </div>
                    <div>
                        <ul>Facebook</ul>
                        <ul>Instagram</ul>
                        <ul>Threads</ul>
                    </div>
                </div>
            </Flex>
        </Box>
    </Box>
  );
};
export default Footer;

