import React, { useState } from "react";
import { Grid, Segment, Header, Button } from "semantic-ui-react";

function App() {
  const [val, setVal] = useState(0);

  const fun = () => {
    setVal(val + 1);
  };

  const fun2 = () => {
    setVal(val - 1);
  };

  return (
    <>
      <Segment placeholder>
        <Grid divided="vertically">
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h1" textAlign="center">
                Count
              </Header>
            </Grid.Column>
            <Grid.Column width={16}>
              <Header as="h2" textAlign="center">
                {val}
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment.Inline>
          <Button color="red" onClick={fun2} disabled={val === 0}>
            Decrement
          </Button>
          <Button color="green" onClick={fun}>
            Increment
          </Button>
        </Segment.Inline>
      </Segment>
      <Header as="h2" textAlign="center">
        Done By : Pavitar Singh - 12007533
      </Header>
    </>
  );
}
export default App;
