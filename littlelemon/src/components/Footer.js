import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import footerlogo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <Box border="solid">
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="0 auto"
            px={12}
            color="white"
            justifyContent="flex-start"
            alignItems="center"
            maxWidth="200px"
            height="auto"
            border="solid"
            >
                <div>
                    <img
                        className="footerlogo"
                        src={footerlogo}
                        alt="Little Lemon Logo"
                    />
                </div>
            </Flex>
        </Box>
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="0 auto"
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
                        <ul>Home</ul>
                        <ul>About</ul>
                        <ul>menu</ul>
                        <ul>Reservations</ul>
                        <ul>Order Online</ul>
                        <ul>Login</ul>
                    </div>
                </div>
            </Flex>
        </Box>
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="0 auto"
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
                    <div>
                        <ul>Address</ul>
                        <ul>phone number</ul>
                        <ul>email</ul>
                    </div>
                </div>
            </Flex>
        </Box>
        <Box backgroundColor="#D9D9D9">
            <Flex
            margin="0 auto"
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

