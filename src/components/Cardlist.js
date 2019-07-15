import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
  console.log('Cardlist')
  return (
    robots.map((val, i) => {
        return (
          <Card
            key={val.id}
            id={val.id}
            name={val.name}
            email={val.email}
            username={val.username}
          />
        );
      })
  );
};

export default CardList;
