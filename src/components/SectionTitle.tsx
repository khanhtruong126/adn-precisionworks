import { apwRed } from "../colors";
import styled from "styled-components";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Container>
      <div className="text-center text-4xl py-2 font-bold">
        {title}
      </div>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  font-family: 'Termina';

  div {
    background-color: ${apwRed};
    color: white;
  }
`;
