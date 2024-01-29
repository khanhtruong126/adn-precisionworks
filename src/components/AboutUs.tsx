import React from "react";
import styled from "styled-components";
import { apwRed } from "../colors";
import { SECTION_ID } from "../App";

const AboutUs = () => {
  return (
    <About id={SECTION_ID.ABOUT_US}>
      <div>Website</div>
      <div>
        <a href="https://www.wmberg.com/resources/our-capabilities">
          https://www.wmberg.com/resources/our-capabilities
        </a>
      </div>
    </About>
  );
};

export default AboutUs;

const About = styled.div`
  font-size: 2.5rem;

  a {
    color: ${apwRed};
  }
`;
