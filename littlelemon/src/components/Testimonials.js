import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const reviews = [
  {
    title: "Review1",
    rating: "5",
    description:
      "Review Text",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Bruchetta",
    rating: "$5.99",
    description:
      "A scrollable bottom sheetOur Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Lemon Dessert",
    rating: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
  },
];

const ReviewsSection = () => {
  return (
    <div>
      <Heading>Testimonials</Heading>
    
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
      >
        {reviews.map((review) => (
          <Card
            key={review.title}
            title={review.rating}
            description={review.description}
            imageSrc={review.getImageSrc()}
          />
        ))}
      </Box>
    </div>
  );
};

export default ReviewsSection;
