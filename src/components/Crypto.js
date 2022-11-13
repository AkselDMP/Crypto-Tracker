import React, { useState } from "react";
import styled from "styled-components";
import Green from "./green.svg";
import greenChange from "./greenchange.svg";
import redChange from "./redchange.svg";
import Red from "./red.svg";

const Crypto = ({ crypto }) => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <div>
        <input onChange={(e) => setSearch(e.target.value)} />
      </div>
      {crypto
        .filter((coin) => {
          if (search === "") {
            return coin;
          } else if (coin.name.toLowerCase().includes(search.toLowerCase())) {
            return coin;
          }
        })

        .map((coin) => {
          return (
            <CoinRow>
              <Coin>
                <div className="left">
                  <img src={coin.image} />
                  <h1>{coin.name}</h1>
                  <h2>(24)</h2>
                  <div className="price-change">
                    {coin.price_change_percentage_24h < 0 ? (
                      <img src={redChange} />
                    ) : (
                      <img src={greenChange} />
                    )}
                    {coin.price_change_percentage_24h < 0 ? (
                      <p className="red">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    ) : (
                      <p className="green">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    )}
                  </div>
                </div>
                <div className="price">
                  <h1>
                    {coin.current_price} <span> €</span>
                  </h1>
                </div>
              </Coin>
            </CoinRow>
          );
        })}
    </Container>
  );
};

export default Crypto;

const CoinData = styled.div``;

const CoinRow = styled.div``;

const Coin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  background: #181a25;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #303241;
  pading: 12px;
  width: 220px;
  height: 100px;
  margin: 12px;
  background-image: ${(props) =>
    props.price_change_percentage_24h < 0 ? `url(${Red})` : `url(${Green})`};
  background-repeat: no-repeat;
  background-postion: center;
  background-size: cover;
  cursor: pointer;

  img {
    width: 30px;
  }

  h1 {
    font-size: 1rem;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    margin-left: 12px;
  }

  h2 {
    font-size: 0.9rem;
    color: #fff;
    font-weight: 300;
    margin-left: 4px;
  }

  .left {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    padding: 12px;
  }

  .price {
    margin-top: 25px;
    padding: 25px;
    h1 {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 600;
    }

    span {
      color: #303241;
      font-weight: 400;
    }
  }

  .price-change {
    display: flex;
    align-items: center;
    img {
      width: 7px;
      padding: 7px;
      margin-bottom: 15px;
    }

    p {
      color: #fff;
      font-size: 0.7rem;
      font-weight: 200;
      margin-bottom: 15px;
    }

    .red {
      color: red;
    }

    .green {
      color: green;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 1000px;
  h1 {
    color: #fff;
  }

  //   .search-bar{
  //     display: flex;
  //     align-items:center;
  //     justify-content: center;

  //     input{
  //         width: 300px;
  //         height: 50px;
  //         padding: 12px;
  //         outline: none;
  //         border: none;
  //         border-radius: 10px;
  //     }
  //   }
`;
