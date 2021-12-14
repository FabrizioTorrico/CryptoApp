import React from "react";
import { Heading, Spacer, useColorMode, Button, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p="2" px="10">
      <Heading size="sm">
        <Link to="/">Welcome to my Crypto App</Link>
      </Heading>
      <Spacer />
      <Button onClick={toggleColorMode} mr="4" size="sm">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};

export default Header;
