import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import SmallCard from "./SmallCard";

const reviews = [
  {
    title: "Sara Lopez",
    rating: "5",
    description:
      "Review Text",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Jon Do",
    rating: "4",
    description:
      "Review Text",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    title: "Sara Lopez",
    rating: "4",
    description:
      "More text.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
  },
  {
    title: "Sara Lopez",
    rating: "4",
    description:
      "More text.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
  },
];

const ReviewsSection = () => {
  return (
    <Box alignContent="center" background="#495E57">
      <Box display="grid" gridTemplateColumns="1fr" padding="20px" minHeight="200px">
        <Box>
          <Heading className="sectionTitle" color="#FEFEFE" textAlign="center">Testimonials</Heading>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
        alignContent="center"
        margin="40px"
      >
        {reviews.map((review) => (
          <SmallCard
            key={review.title}
            title={review.rating}
            description={review.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ReviewsSection;
