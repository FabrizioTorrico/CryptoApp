import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  StatArrow,
} from "@chakra-ui/react";

const StatCard = ({ type = "default", label, number, text }) => {
  const bg = useColorModeValue("gray.200", "gray.900");

  if (type === "primary") {
    const bg = number > 0 ? "green.400" : "red.400";
    return (
      <Stat bg={bg} p="2" size="small" borderRadius={"10px"} color="white">
        <StatLabel>{label}</StatLabel>
        <StatNumber>
          <StatArrow
            type={number > 0 ? "increase" : "decrease"}
            color="white"
          />{" "}
          {number.toFixed(2)}%{" "}
        </StatNumber>
        <StatHelpText>{text}</StatHelpText>
      </Stat>
    );
  }

  return (
    <Stat bg={bg} p="2" size="small" borderRadius={"10px"}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{number}</StatNumber>
      <StatHelpText>{text}</StatHelpText>
    </Stat>
  );
};

export default StatCard;
