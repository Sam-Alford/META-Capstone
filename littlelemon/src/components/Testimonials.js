import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SmallCard from "./SmallCard";

const reviews = [
  {
    title: "Sara Lopez",
    rating: "5",
    description:
      "Best place to eat. Love the Lemon Dessert",
    getImageSrc: () => require("../assets/5rating.png"),
  },
  {
    title: "Jon Do",
    rating: "5",
    description:
      "My favorite place to go out to eat.",
    getImageSrc: () => require("../assets/5rating.png"),
  },
  {
    title: "Dean Jackson",
    rating: "5",
    description:
      "Everyting on the menu is good here.",
    getImageSrc: () => require("../assets/5rating.png"),
  },
  {
    title: "Frank Lopez",
    rating: "5",
    description:
      "Generic fourth response for comedic effect",
    getImageSrc: () => require("../assets/5rating.png"),
  },
];

const ReviewsSection = () => {
  return (
    <Box background="#495E57">
      <Box display="grid" gridTemplateColumns="1fr" padding="20px" minHeight="250px">
        <Box>
          <Heading className="sectionTitle" color="#FEFEFE" textAlign="center">Testimonials</Heading>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          alignContent="center"
          padding="50px"
        >
          {reviews.map((review) => (
            <SmallCard className="smallCard"
              border="solid"
              key={review.title}
              title={review.title}
              description={review.description}
              imageSrc={review.getImageSrc()}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
