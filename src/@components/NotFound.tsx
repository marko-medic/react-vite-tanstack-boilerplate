import { Link } from "@tanstack/react-router";
import styled from "styled-components";

const NotFoundStyled = styled.div`
  a {
    text-decoration: underline;
    color: blue;
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <h3>Oops.. page you are looking is not found :(</h3>
      <Link to="/">Go back to the home page!</Link>
    </NotFoundStyled>
  );
};

export {
  NotFound
};
