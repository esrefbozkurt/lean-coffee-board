import styled from "styled-components";
import { BiTrash } from "react-icons/bi";

export default function Card({ thoughts, author, onDeleteEntry }) {
  return (
    <StyledSection>
      <button onClick={onDeleteEntry}>
        <BiTrash />
      </button>
      <p>{thoughts}</p>
      <span>{author}</span>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 40px;
  box-shadow: 3px 3px 5px 5px silver;

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
    height: 20px;
    width: 20px;
    align-self: flex-end;
    padding: -4px;
  }
  button:hover {
    color: #1f2937;
  }
`;
