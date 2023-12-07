import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import SmallCard from "./SmallCard";

const reviews = [
  {
    title: "Review1",
    rating: "5",
    description:
      "Review Text",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Review2",
    rating: "4",
    description:
      "Review Text",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Review3",
    rating: "4",
    description:
      "More text.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
  },
  {
    title: "Review4",
    rating: "4",
    description:
      "More text.",
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
        alignContent="center"
      
      >
        {reviews.map((review) => (
          <SmallCard
            key={review.title}
            title={review.rating}
            description={review.description}
          />
        ))}
      </Box>
    </div>
  );
};

export default ReviewsSection;
