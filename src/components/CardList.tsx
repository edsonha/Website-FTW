import React from "react";
import Card from "./Card";
import { IRobot } from "../containers/App";

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  // Use newly created interface type imported from App.tsx. Expect to have array with IRobot interface object
  return (
    <div>
      {robots.map(robot => {
        return <Card key={robot.id} {...robot} />;
      })}
    </div>
  );
};

export default CardList;
