import React from "react";

const Result = ({ numb, numbers }) => {
  let results;
  if (numbers) {
    if (numb < numbers) {
      results = "Higher";
    } else if (numb > numbers) {
      results = "Lower";
    } else if (numb == numbers) {
      results = "you are correct";
    } else {
      results = "input is invalid";
    }
  }
  return <div>Your guess : {results} </div>;
};

export default Result;
