import AboutPic from "../assets/aboutpic.png"
import { Box, Flex, Heading } from "@chakra-ui/react";

function AboutContent (){
    return(
        <Box display="grid" gridTemplateColumns="1fr 1fr" margin="60px">
            <Box padding="80px">
                    <Heading fontSize="40px">Little Lemon</Heading>
                    <h2>Chicago</h2>
                    <Box maxWidth="400px" paddingTop="20px">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </Box>
            </Box>
            <Box>
                <Flex>
                    <img
                        className="aboutpic"
                        src={AboutPic}
                        alt="chefs with food"
                    />
                </Flex>
            </Box>
        </Box>

    )
}

export default AboutContent