import AboutPic from "../assets/aboutpic.png"
import { Box, Flex, Heading } from "@chakra-ui/react";

function AboutContent (){
    return(
        <Box className="aboutBox">
            <Box padding="80px">
                    <Heading fontSize="40px">Little Lemon</Heading>
                    <h2>Chicago</h2>
                    <p className="aboutText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p className="aboutText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </Box>
            <Box>
                <Flex>
                    <img
                        className="aboutPic"
                        src={AboutPic}
                        alt="chefs with food"
                    />
                </Flex>
            </Box>
        </Box>

    )
}

export default AboutContent