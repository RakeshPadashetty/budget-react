import React from 'react'
import { Button } from "semantic-ui-react";
function ButtonSaveOrCancel({ AddEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => AddEntry()}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
