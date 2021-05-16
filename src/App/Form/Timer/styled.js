import styled from "styled-components";

export const Clock = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.color.lightText};
  font-family: "Roboto Mono", monospace;
  font-size: 13px;
  margin: unset;
`;
