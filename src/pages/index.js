import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import { useState } from "react";

export default function HomePage() {
  const [entries, setEntries] = useState([]);

  function handleAddEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }
  console.log(entries);
  return (
    <>
      <Header />
      {entries.map((entry) => {
        return (
          <Card key={entry.id} thoughts={entry.thoughts} author={entry.name} />
        );
      })}

      <Form onAddEntry={handleAddEntry} />
    </>
  );
}
