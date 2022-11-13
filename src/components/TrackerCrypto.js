import React, { useCallback, useEffect, useState } from "react";
import Crypto from "./Crypto";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const TrackerCrypto = ( { search, setSearch }) => {
  const [crypto, setCrypto] = useState(null);

 const getCrypto = useCallback(async () => {
    try{
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false`
        )
        const result = await response.json()
        setCrypto(result)
        console.log(result)
    }catch (err){
        console.log(err)
    }
 }, [])

 console.log(crypto)
 console.log("aksel")

  useEffect(() =>{
    getCrypto()
  }, [getCrypto])

  return (
    <>
    <Container>
      {/* {crypto && <SearchBar crypto={crypto} setSearch={setSearch}/>} */}
      { crypto && <Crypto crypto={crypto} search={search}/> }
      </Container>
    </>
  );
};

export default TrackerCrypto;



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #181a25;
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
`
