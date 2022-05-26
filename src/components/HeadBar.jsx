import React from "react";
import { Header, Nav, Anchor } from "grommet";

const HeadBar = ({ name }) => {
  return (
    <Header background="light-4" pad="small">
      <Nav direction="row">
        <Anchor
          label={name}
          href="https://www.linkedin.com/in/guy-hassin-34986b220/"
        />
        <Anchor label="Profile" href="#" />
      </Nav>
    </Header>
  );
};

export default HeadBar;
