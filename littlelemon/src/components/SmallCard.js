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
        <Box>
          <Image src={imageSrc} alt={title} maxHeight="320px" maxWidth="265px"/>
          <Image src={profilePic} alt={title} maxHeight="320px" maxWidth="265px"/>
        </Box>
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
