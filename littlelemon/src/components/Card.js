import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  const cardProperty = {
    backgroundColor: "#EDEFEE",
    borderRadius: "16px",
    color: "Black",
  }
  return (
    <HStack style={cardProperty} maxWidth="265px">
      <VStack>
        <Image objectFit="fill" src={imageSrc} alt={title} borderRadius="10px" maxHeight="320px" maxWidth="265px"/>
        <VStack style={{
          padding: '',
          maxWidth: "200px"
        }} alignItems="flex-start">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Heading fontSize="16px">
            <a href="/order">Order a delivery <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
          </Heading>
        </VStack>
      </VStack>

    </HStack>
  );
};

export default Card;
