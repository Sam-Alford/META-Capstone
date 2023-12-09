import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";

const SmallCard = ({ title, description, imageSrc }) => {

  const cardProperty = {
    backgroundColor: "#EDEFEE",
    borderRadius: "16px",
    color: "Black",
  }
  return (
    <HStack style={cardProperty} maxWidth="200px" padding="20px">
      <VStack>
        <Image src={imageSrc} alt={title} maxHeight="320px" maxWidth="265px"/>
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
