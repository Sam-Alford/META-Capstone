import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        }} alignItems="flex-start">

          <Heading size="md">{title}</Heading>

          <Text>{description}</Text>


        </VStack>

      </VStack>

    </HStack>
  );
};

export default SmallCard;
