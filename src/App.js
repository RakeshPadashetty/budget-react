/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  function deleteEntry(id) {
    const result = entries.filter(x=>x.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(id);
    if(id)
    {
      const index = entries.findIndex(entry=>entry.id === id);
      const entry = entries[index];
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setEntryId(id);
      setIsOpen(true);
      resetToDefaults();
    }
  }

    function AddEntry() {
      const result = entries.concat({
        id: entries.length + 1,
        description,
        value,
        isExpense,
      });
      setEntries(result);
      resetToDefaults();
    }

    function resetToDefaults() {
      setDescription('');
      setValue('');
      setIsExpense(true);
    }
    useEffect(() => {
     if(!isOpen && entryId) {
       const index = entries.findIndex((entry) => entry.id === entryId);
       const newEntries = [...entries];
       newEntries[index].description = description;
       newEntries[index].value = value;
       newEntries[index].isExpense = isExpense;
       setEntries(newEntries);
     }
    }, [isOpen])

    useEffect(() => {
     let totalIncome = 0;
     let totalExpense = 0;
     entries.map((entry) => {
       if(entry.isExpense) {
        return totalExpense += entry.value;
       } else {
        return totalIncome += entry.value;
       }
     })
     setTotal(totalIncome - totalExpense);
     setExpense(totalExpense);
     setIncome(totalIncome);
    }, [entries])

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances income={income} expense={expense} />
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        AddEntry={AddEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id:1,
    description: "Work Income",
    value: 1000,
    isExpense: false,
  },
  {
    id:2,
    description: "Rent",
    value: 200,
    isExpense: true,
  },
  {
    id:3,
    description: "Water Bill",
    value: 17,
    isExpense: true,
  },
  {
    id:4,
    description: "Electricity Bill",
    value: 75,
    isExpense: true,
  },
];