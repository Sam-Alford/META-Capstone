import React from "react"
import {Box, Flex} from "@chakra-ui/react"
import heroImage from "../assets/heroImage.png"

const Hero = () => {
    return (
        <Box className="hero" display="grid" gridTemplateColumns="1fr 1fr" alignContent="center">
            <Box margin="100px">
                <Flex paddingTop="50px">
                    <h1 className="title">Little Lemon</h1>
                </Flex>
                <Flex>
                    <h2>Chicago</h2>
                </Flex>
                <Flex maxWidth="500px">
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </Flex>
                <Flex>
                    <button className="resButton">Reserve a Table</button>
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



// function Hero (){
//     return(
//         <div className="hero">
//             <h1 className="title">Little Lemon</h1>
//             <h2>Chicago</h2>
//             <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
//             <button className="resButton">Reserve a Table</button>
//             <div>
//                 <img
//                     className="heroImage"
//                     src={heroImage}
//                     alt="chef with food"
//                 />
//             </div>
//         </div>
//     )
// }

export default Hero