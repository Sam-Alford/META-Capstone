import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SmallCard from "./SmallCard";

const reviews = [
  {
    title: "Sara Lopez",
    rating: "5",
    description:
      `"Best place to eat. Love the Lemon Dessert"`,
    getImageSrc: () => require("../assets/5rating.png"),

  },
  {
    title: "Jon Doe",
    rating: "5",
    description:
      `"My favorite place to go out to eat. Love it all!"`,
    getImageSrc: () => require("../assets/5rating.png"),
  },
  {
    title: "Dean Jackson",
    rating: "5",
    description:
      `"Everyting on the menu is good here.Try the cheesecake."`,
    getImageSrc: () => require("../assets/5rating.png"),
  },
  {
    title: "Frank Lopez",
    rating: "5",
    description:
      `"Generic fourth response for comedic effect. WAKKA WAKKA"`,
    getImageSrc: () => require("../assets/5rating.png"),
  },
];

const ReviewsSection = () => {
  return (
    <Box background="#495E57" height="590px">
      <Box display="grid" gridTemplateColumns="1fr" padding="20px" minHeight="250px">
        <Box>
          <Heading className="sectionTitle" color="#FEFEFE" textAlign="center" paddingTop="60px">Testimonials</Heading>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          alignContent="center"
          padding="50px"
          marginTop="60px"
        >
          {reviews.map((review) => (
            <SmallCard className="smallCard"
              key={review.title}
              title={review.title}
              description={review.description}
              imageSrc={review.getImageSrc()}
              profilePic={review.getImageSrc()}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
