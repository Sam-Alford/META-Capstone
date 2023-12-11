import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Card from "./Card";
import {Link} from "react-router-dom"

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../assets/greeksalad.png"),
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Extra text padding for the rooms cause I need it.",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
  },
];

const SpecialsSection = () => {
  return (
    <Box>
      <Box className="gridBox">
          <Heading className="sectionTitleSpecials">This weeks specials!</Heading>        
          <Flex className="orderBoxSpecials">
            <Link to="/order">
              <button className="resButton">Online Menu</button>
            </Link>
          </Flex>
      </Box>
      <Box className="cardBox">
        {specials.map((special) => (
          <Card
            key={special.price}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SpecialsSection;
