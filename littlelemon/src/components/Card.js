import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  const cardProperty = {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "Black",
  }
  
  return (
    <HStack style={cardProperty}>
      <VStack  >
        <Image objectFit="cover" src={imageSrc} alt={title} borderRadius="10px" maxHeight="200px"/>

        <VStack style={{
          padding: '10px',
        }} alignItems="flex-start">

          <Heading size="md">{title}</Heading>

          <Text>{description}</Text>

          <Heading size="xs">
            <a href="specials">Order a delivery <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
          </Heading>

        </VStack>

      </VStack>

    </HStack>
  );
};

export default Card;
