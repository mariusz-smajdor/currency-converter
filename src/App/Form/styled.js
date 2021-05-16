import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.main};
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.main};
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    gap: 10px;
  }
`;

export const LabelText = styled.span`
  display: inline-block;
  flex-basis: 250px;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Input = styled.input`
  flex-basis: 300px;
  color: #333;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.input};
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
  transition: 0.3s;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

