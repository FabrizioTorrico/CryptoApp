import React from "react";
import { Grid, Text } from "@chakra-ui/react";

const ListTitles = () => {
  return (
    <Grid
      templateColumns={["repeat(4, 1fr) ", "repeat(4, 1fr) ", "repeat(6, 1fr)"]}
      gap={4}
    >
      <Text>Symbol</Text>
      <Text display={["none", "none", "grid"]}>Name</Text>
      <Text>Price</Text>
      <Text display={["none", "none", "grid"]}>Market Cap</Text>
      <Text>24h %</Text>
      {/* <div>Filter</div> */}
    </Grid>
  );
};

export default ListTitles;
