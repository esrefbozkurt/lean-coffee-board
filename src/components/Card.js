import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

export default function Card({
  id,
  thoughts,
  author,
  onDeleteEntry,
  onChange,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onChange(
      id,
      event.target.elements[1].value,
      event.target.elements[2].value
    );
    toggleEdit();
  }
  //dynamischer Key für edit funktion
  //keine id mehr bei api task macht der server selbst
  //

  //edit function

  return (
    <StyledSection>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <button name="accept-button" type="submit">
            <AiOutlineCheck />
          </button>
          <input
            type="text"
            name="edit-thoughts"
            defaultValue={thoughts}
            onChange={onChange}
          />
          <input
            type="text"
            name="edit-author"
            defaultValue={author}
            onChange={onChange}
          />
        </form>
      ) : (
        <>
          <div>
            <p>{thoughts}</p>
            <span>{author}</span>
          </div>
          <div>
            <button name="delete-button" onClick={onDeleteEntry}>
              <BiTrash />
            </button>
            <button name="edit-button" onClick={toggleEdit}>
              <GrEdit />
            </button>
          </div>
        </>
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 40px;
  box-shadow: 3px 3px 5px 5px silver;

  div {
    align-content: space-between;
  }
  p {
    font-size: 24px;
    margin: 0;
    margin-bottom: 5px;
  }
  span {
    color: red;
  }
  button {
    background: white;

    color: #333;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: flex-end;
  }

  button:hover {
    color: #1f2937;
  }
`;
