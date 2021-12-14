import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const ListTitles = () => {
  return (
    <Flex align="center" width="90%">
      <Text ml="4">symbol</Text>
      <Spacer />
      <Text>Name</Text>
      <Spacer />
      <Text>Price</Text>
      <Spacer />
      <Text>Market Cap</Text>
      <Spacer />
      <Text>24h %</Text>
      <Spacer />
      <div>Filter</div>
    </Flex>
  );
};

export default ListTitles;
