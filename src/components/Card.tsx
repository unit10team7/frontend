import React from "react";
import styled from "@emotion/styled";
import { CardProps } from "../type/type";

const Card = (CardProps: { className: string; children: any }) => {
  return (
    <div>
      <Cards />
    </div>
  );
};

export const Cards = styled.div`
  width: 141px;
  height: 291px;
  display: flex;
  background-color: gray;
  font-color: black;
  gap: 30;
  background: rgb(64, 175, 255);
  background: linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%);
  margin: 50px;
  border-radius: 25px;
`;

export default Card;
