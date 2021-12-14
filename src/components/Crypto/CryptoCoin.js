import React from "react";
import {
  Grid,
  Button,
  Image,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CryptoCoin = ({ symbol, name, image, market_data, id }) => {
  const { current_price, market_cap, price_change_percentage_24h } =
    market_data;

  const bg = useColorModeValue("gray.200", "gray.900");
  return (
    <Grid
      bg={bg}
      borderRadius={"10px"}
      p="4"
      templateColumns={["repeat(4, 1fr) ", "repeat(4, 1fr) ", "repeat(6, 1fr)"]}
      gap={6}
      alignItems={"center"}
    >
      <Center>
        <Image src={image.thumb} mr="4" />
        <Text>{symbol.toUpperCase()}</Text>
      </Center>

      <Text display={["none", "none", "grid"]}>{name}</Text>

      <Text>${current_price["usd"]}</Text>

      <Text display={["none", "none", "grid"]}>
        {market_cap["usd"].toLocaleString()}
      </Text>

      <Text color={price_change_percentage_24h > 0 ? "green.400" : "red.400"}>
        {price_change_percentage_24h.toFixed(2)}%
      </Text>

      <Link to={`/cryptos/${id}`}>
        <Button colorScheme={"green"}>
          <Text display={["none", "grid"]}>More Info</Text>
          <ArrowForwardIcon />
        </Button>
      </Link>
    </Grid>
  );
};

export default CryptoCoin;
