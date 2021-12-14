import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCryptoCoinData } from "../../apis/coinGeckoApi";
import StatCard from "../StatCard";
import {
  Flex,
  Spacer,
  Text,
  Grid,
  GridItem,
  Image,
  Box,
  Center,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";

const CryptoInfo = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const bg = useColorModeValue("gray.200", "gray.900");

  const Header = () => {
    return (
      <Flex
        p="4"
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={{ md: 7 }}
      >
        <Image boxSize="50" src={coinData.image.large} mr="4" alt={id} />
        <Box mr="4">
          <Text fontWeight={600} fontSize={{ base: "2xl" }} lineHeight={"100%"}>
            {coinData.name}
          </Text>
          <Text>{coinData.symbol}</Text>
        </Box>
        <Center w="40px" h="40px" bg={bg} borderRadius={"50%"}>
          <Text fontWeight="bold" fontSize="lg">
            #{coinData.market_cap_rank}
          </Text>
        </Center>
        <Spacer />
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <StatCard
            type="primary"
            number={coinData.market_data.price_change_percentage_24h}
          ></StatCard>
          <Text fontSize="4xl" fontWeight={600}>
            ${coinData.market_data.current_price["usd"]}
          </Text>
        </Flex>
      </Flex>
    );
  };

  const Statistics = () => {
    return (
      <Grid
        h="200px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mb="14"
      >
        <StatCard
          label="community score"
          number={coinData.community_score}
        ></StatCard>
        <StatCard
          label="total volume"
          number={coinData.market_data.total_volume["usd"].toLocaleString()}
        ></StatCard>
        <StatCard
          label="market cap"
          number={coinData.market_data.market_cap["usd"].toLocaleString()}
        ></StatCard>
        <StatCard
          label="developer score"
          number={coinData.developer_score}
        ></StatCard>
        <GridItem rowSpan={4} colSpan={2}>
          <Box bg={bg} p="4" borderRadius={"10px"}>
            <Text mb="4" noOfLines={3}>
              {coinData.description === ""
                ? "there is no description for this coin"
                : coinData.description["en"]}
            </Text>
            <Link
              href={`https://www.coingecko.com/en/coins/${coinData.id}`}
              isExternal
            >
              <Button>More Info</Button>
            </Link>
          </Box>
        </GridItem>
        <StatCard
          type="primary"
          label="24 hours"
          number={coinData.market_data.price_change_percentage_24h}
        ></StatCard>
        <StatCard
          type="primary"
          label="7 days"
          number={coinData.market_data.price_change_percentage_7d}
        ></StatCard>
        <StatCard
          type="primary"
          label="1 month"
          number={coinData.market_data.price_change_percentage_30d}
        ></StatCard>
        <StatCard
          type="primary"
          label="1 year"
          number={coinData.market_data.price_change_percentage_1y}
        ></StatCard>
      </Grid>
    );
  };
  useEffect(() => {
    const refresh = async () => {
      const fetchedCoinData = await getCryptoCoinData(id);
      setCoinData(fetchedCoinData);
    };
    refresh();
  }, [id]);

  if (Object.keys(coinData).length === 0) return <div>loading...</div>;
  console.log(coinData);
  return (
    <Box>
      {Header()}
      <Box bg={bg} py={2} mb={"7"} mr="-20" ml="-20" />
      {Statistics()}
    </Box>
  );
};

export default CryptoInfo;
