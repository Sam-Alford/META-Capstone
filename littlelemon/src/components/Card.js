import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import scooter from '../assets/scooter.png'
import React from "react";

const Card = ({ title, description, imageSrc, price }) => {

  const cardProperty = {
    className: "cardProperty",
  }
  return (
    <HStack style={cardProperty} maxWidth="265px">
      <VStack className="cardProperty">
        <Image className="imageProperty" objectFit="fill" src={imageSrc} alt={title} borderRadius="10px" maxHeight="320px" maxWidth="265px"/>
        <VStack style={{
          padding: '',
          maxWidth: "200px"
        }} alignItems="flex-start">
          <Box width="340px" display="grid" gridTemplateColumns="1fr 1fr">
            <Heading size="md" fontSize="24px">{title}</Heading>
          <Heading fontSize="16px" color="#EE9972">{price}</Heading>
          </Box>
          <Text>{description}</Text>
          <Heading fontSize="16px" >
            <a href="/order" >Order a delivery <img className='scooterIcon'src={scooter} alt="scooter icon"/>
          </a>
          </Heading>
        </VStack>
      </VStack>

    </HStack>
  );
};

export default Card;
