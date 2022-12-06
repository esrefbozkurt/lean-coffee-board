import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import { useState } from "react";

export default function HomePage() {
  const [entries, setEntries] = useState([]);

  function handleAddEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  function handleDelete(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  function handleChange(id, thoughts, author) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, thoughts, name: author };
        return entry;
      })
    );
  }

  return (
    <>
      <Header />
      {entries.map((entry) => {
        return (
          <Card
            id={entry.id}
            key={entry.id}
            thoughts={entry.thoughts}
            author={entry.name}
            onDeleteEntry={() => handleDelete(entry.id)}
            onChange={handleChange}
          />
        );
      })}

      <Form onAddEntry={handleAddEntry} />
    </>
  );
}
