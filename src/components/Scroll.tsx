import React from "react";

type Props = {
  children?: JSX.Element; //May or may not receive children props
};

const Scroll = (props: Props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "calc(100vh - 190px)"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
