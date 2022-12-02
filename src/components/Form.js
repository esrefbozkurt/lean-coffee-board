import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const thoughts = event.target.thoughts.value;
    const author = event.target.author.value;
    const newEntry = {
      id: nanoid(),
      thoughts: thoughts,
      name: author,
    };
    onAddEntry(newEntry);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="thoughts"
          placeholder="Type your thoughts..."
          required
        />
        <input type="text" name="author" placeholder="Your name" required />
        <button type="submit" value="Submit">
          +
        </button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 1rem;
`;
