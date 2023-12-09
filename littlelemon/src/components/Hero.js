import React from "react"
import {Box, Flex} from "@chakra-ui/react"
import heroImage from "../assets/heroImage.png"
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <Box className="hero">
            <Box marginLeft="60px">
                <Flex paddingTop="50px">
                    <h1 className="title" data-test-id="title">Little Lemon</h1>
                </Flex>
                <Flex>
                    <h2 className="subTitle">Chicago</h2>
                </Flex>
                <Flex paddingRight="120px">
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </Flex>
                <Flex paddingTop="40px">
                    <Link to="/booking">
                    <button className="resButton" data-test-id="resButton">Reserve a Table</button>
                    </Link>
                </Flex>
            </Box>
            <Box>
                 <img
                    className="heroImage"
                    src={heroImage}
                    alt="chef with food"
                />
            </Box>
        </Box>
    )
}

export default Hero