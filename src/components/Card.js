import styled from "styled-components";

export default function Card({ thoughts, author }) {
  return (
    <section>
      <p>{thoughts}</p>
      <span>{author}</span>
    </section>
  );
}

{
  /* <StyledSection>
  <StyledContent></StyledContent>
</StyledSection>;
const StyledSection = styled.section`
  section {
    display: flex;
  }
`;

const StyledContent = styled.content`
  div {
    align-self: center;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
  }
  span {
    font-family: Arial, Helvetica, sans-serif;
  }
`; */
}
