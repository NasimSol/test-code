import React from "react";
import styled from "styled-components";

const ErrorPage = styled.section`
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Error = () => {
  return (
    <ErrorPage>
      page is not found
    </ErrorPage>
  );
};

export default Error;
