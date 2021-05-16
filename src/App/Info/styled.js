import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 20px 0;
`;

export const Text = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.color.secondary};
`;
