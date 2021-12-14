import React from "react";
import { Heading, Spacer, useColorMode, Button, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p="2" px="10" as="nav">
      <Heading size="md">
        <Link to="/">Welcome to my Crypto App</Link>
      </Heading>
      <Spacer />
      <Button onClick={toggleColorMode} mr="4" size="md">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default Header;
