import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 667px;
  margin: 20px;
  background: ${({ theme }) => theme.color.white};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.color.secondary};
`;
