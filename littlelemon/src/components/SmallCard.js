import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SmallCard = ({ title, description, imageSrc, profilePic }) => {

  return (
    <HStack className="smallCard">
      <VStack>
          <Image padding="10px" src={imageSrc} alt={title}/>
          <Heading>{title}</Heading>
          <Text padding="5px">{description}</Text>
      </VStack>
    </HStack>
  );
};

export default SmallCard;
