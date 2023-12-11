import React from "react";
import {Box} from "@chakra-ui/react";
import footerlogo from '../assets/footerlogo.png';
import { Link } from "react-router-dom";
import fb from "../assets/devicon_facebook.png"
import twitter from "../assets/devicon_twitter.png"
import instagram from "../assets/skill-icons_instagram.png"

const Footer = () => {
  return (
    <Box className="allFooter">
        <Box className="footerBox">
                    <img
                        className="footerlogo"
                        src={footerlogo}
                        alt="Little Lemon Logo Footer"
                    />
        </Box>
        <Box className="footerBox">
                <div>
                    <div className="footerTitle">
                        Doormat Navigation
                    </div>
                    <div>
                        <ul><Link to="/" className="navFooter">Home</Link></ul>
                        <ul><Link to="/about-us"className="navFooter">About</Link></ul>
                        <ul><Link to="/menu"className="navFooter">Menu</Link></ul>
                        <ul><Link to="/booking"className="navFooter">Reservations</Link></ul>
                        <ul><Link to="/order" className="navFooter">Order Online</Link></ul>
                        <ul><Link to="/login" className="navFooter">Login</Link></ul>
                    </div>
                </div>
        </Box>
        <Box  className="footerBox">
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
        </Box>
        <Box  className="footerBox">
                <Box>
                    <Box className="footerTitle">
                        Social Media Links
                    </Box>
                    <Box className="socialLinkBox">
                        <Link className="socialLinks" to="http://wwww.facebook.com">
                            <img src={fb}
                                alt="Facebook icon">
                            </img>
                        </Link>
                        <Link className="socialLinks" to="http://wwww.facebook.com">
                            <img src={twitter}
                                alt="Twitter icon">
                            </img>
                        </Link>
                        <Link className="socialLinks" to="http://wwww.facebook.com">
                            <img src={instagram}
                                alt="Instagram Icon">
                            </img>
                        </Link>
                    </Box>
                </Box>            
        </Box>
    </Box>
  );
};
export default Footer;

