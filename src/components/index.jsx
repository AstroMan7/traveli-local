import React, { useState } from "react";
import { Box, Grommet, Header, Nav, Anchor } from "grommet";

import HeadBar from "./HeadBar";
import Filters from "./Filters";

//*************************************************************************************************/

const Main = () => {
  const [name, setName] = useState("Traveli");
  const [arr, setArr] = useState(["eyal", "guy", "homo"]);

  return (
    <Grommet>
      <HeadBar name={name} />
      <Filters setName={setName} arr={arr} />
    </Grommet>
  );
};

export default Main;
