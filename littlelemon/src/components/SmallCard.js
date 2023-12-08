import { Heading, HStack, Text, VStack} from "@chakra-ui/react";
import React from "react";

const SmallCard = ({ title, description, imageSrc }) => {

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
          background: '#EDEFEE',
          borderRadius: "16px"
        }} alignItems="flex-start">

          <Heading size="md">{title}</Heading>

          <Text>{description}</Text>


        </VStack>

      </VStack>

    </HStack>
  );
};

export default SmallCard;
