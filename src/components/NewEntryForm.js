import React from 'react'
import {  Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({
  AddEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ButtonSaveOrCancel
        AddEntry={AddEntry}
      />
    </Form>
  );
}

export default NewEntryForm
