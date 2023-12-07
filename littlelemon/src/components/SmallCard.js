import { Heading, HStack, Text, VStack} from "@chakra-ui/react";
import React from "react";

const SmallCard = ({ title, description }) => {

  const cardProperty = {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "Black",
  }
  
  return (
    <HStack style={cardProperty} maxWidth="150px">
      <VStack  >
        <VStack style={{
          padding: '10px', 
          border: "solid",
        }} alignItems="flex-start">

          <Heading size="md">{title}</Heading>

          <Text>{description}</Text>


        </VStack>

      </VStack>

    </HStack>
  );
};

export default SmallCard;
