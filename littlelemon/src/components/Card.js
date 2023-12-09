import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import scooter from '../assets/scooter.png'
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
            <a href="/order">Order a delivery <img className='scooterIcon'src={scooter} alt="scooter icon"/>
          </a>
          </Heading>
        </VStack>
      </VStack>

    </HStack>
  );
};

export default Card;
