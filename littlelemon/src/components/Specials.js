import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

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
      "A scrollable bottom sheetOur Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
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
    <div>
      <Heading>This weeks specials!</Heading>
      <button className="resButton">Online Menu</button>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {specials.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </Box>
    </div>
  );
};

export default SpecialsSection;
