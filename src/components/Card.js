import styled from "styled-components";

export default function Card({ thoughts, author }) {
  return (
    <StyledSection>
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
  margin: 20px;
  box-shadow: 3px 3px 5px 5px silver;

  p {
    font-size: 24px;
  }
  span {
    color: red;
  }
`;
