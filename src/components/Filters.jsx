import React from "react";
import { Heading, Nav, Anchor, Box, TextInput } from "grommet";

const Filters = ({ setName, arr }) => {
  return (
    <Box
      justify="center"
      background={"red"}
      height="medium"
      pad={"medium"}
      direction="row"
    >
      <Box direction="column" margin={"large"}>
        <Heading level="1" margin="none">
          Chapter 1
        </Heading>
        <Box background={"white"} margin={{ top: "large" }}>
          <TextInput
            placeholder="type here"
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
      </Box>
      {arr
        .filter((name) => name === "guy")
        .map((name) => (
          <Box margin={"large"}>
            <Heading level="1" margin="none">
              {name}
            </Heading>
          </Box>
        ))}
    </Box>
  );
};

export default Filters;
