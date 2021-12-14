import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CryptoCoin = ({ symbol, name, image, market_data, id }) => {
  const { current_price, market_cap, price_change_percentage_24h } =
    market_data;

  const bg = useColorModeValue("gray.200", "gray.900");
  const buttonColor = useColorModeValue("white", "black");
  return (
    <Flex align="center" bg={bg} borderRadius={"10px"} p="4">
      <Image src={image.thumb} mr="4" />
      <Text>{symbol.toUpperCase()}</Text>
      <Spacer />
      <Text>{name}</Text>
      <Spacer />
      <Text>${current_price["usd"]}</Text>
      <Spacer />
      <Text>{market_cap["usd"].toLocaleString()}</Text>
      <Spacer />
      <Text color={price_change_percentage_24h > 0 ? "green.400" : "red.400"}>
        {price_change_percentage_24h.toFixed(2)}%
      </Text>
      <Spacer />
      <Link to={`/cryptos/${id}`}>
        <Button colorScheme={"green"} color={buttonColor}>
          More Info
        </Button>
      </Link>
    </Flex>
  );
};

export default CryptoCoin;
