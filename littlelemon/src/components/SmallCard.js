import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import React from "react";

const SmallCard = ({ title, description, imageSrc, profilePic }) => {

  const cardProperty = {
    backgroundColor: "#EDEFEE",
    borderRadius: "16px",
    color: "Black",
  }
  return (
    <HStack style={cardProperty} maxWidth="200px" padding="20px">
      <VStack>        
          <Image src={imageSrc} alt={title} maxHeight="320px" maxWidth="265px" alignItems="flex-start" />        
        <VStack style={{
          maxWidth: "200px"
        }} alignItems="flex-start">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </VStack>

    </HStack>
  );
};

export default SmallCard;
