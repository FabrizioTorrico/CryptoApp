import React from "react";
import { getCryptoListData } from "../../apis/coinGeckoApi.js";

import ListTitles from "../ListTitles.js";
import CryptoCoin from "./CryptoCoin.js";
import {
  Heading,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { Search2Icon, RepeatIcon } from "@chakra-ui/icons";

class CryptoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cryptoList: [], query: "", refreshing: false };
  }

  refresh = async () => {
    this.setState({ refreshing: true });
    console.log("refreshing");
    const cryptoList = await getCryptoListData();
    this.setState({ cryptoList });
    this.setState({ refreshing: false });
  };

  componentDidMount() {
    this.refresh();
  }

  renderSeeker() {
    return (
      <Stack direction="row" textAlign={"center"}>
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.500" />}
          />
          <Input
            type="crypto"
            placeholder="Crypto currency"
            onChange={(event) =>
              this.setState({ query: event.target.value.toLocaleLowerCase() })
            }
          />
        </InputGroup>
        <Center>
          <IconButton
            size="lg"
            aria-label="Refresh cryptos"
            icon={
              this.state.refreshing === false ? <RepeatIcon /> : <Spinner />
            }
            onClick={this.refresh}
          />
        </Center>
      </Stack>
    );
  }

  renderList() {
    const getFilteredItems = () => {
      if (!this.state.query) return this.state.cryptoList;
      return this.state.cryptoList.filter(
        (coin) =>
          coin.name.toLowerCase().includes(this.state.query) ||
          coin.symbol.toLowerCase().includes(this.state.query)
      );
    };

    return getFilteredItems().map((cryptoCoin, i) => (
      <CryptoCoin {...cryptoCoin} key={i} />
    ));
  }

  render() {
    return (
      <Stack
        textAlign={"center"}
        spacing={{ base: 4 }}
        py={{ base: 14, md: 24 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "7xl" }}
          lineHeight={"100%"}
          mb={{ md: 14 }}
        >
          Top 50 ranked cryptos by volume, will you be able to find the&ensp;
          <Text as={"span"} color={"green.400"}>
            opportunity?
          </Text>
        </Heading>
        {this.renderSeeker()}
        <ListTitles />
        {this.renderList()}
      </Stack>
    );
  }
}

export default CryptoList;
