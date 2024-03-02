import { apwRed } from "../colors";
import styled from "styled-components";
import { Typography } from "antd";

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

  div {
    background-color: ${apwRed};
    color: white;
  }
`;
