import React from 'react'
import { Grid,  Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({income, expense}) {
    return (
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance color="green" title="Income" value={income} />
            </Grid.Column>

            <Grid.Column>
              <DisplayBalance color="red" title="Expense" value={expense} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances
