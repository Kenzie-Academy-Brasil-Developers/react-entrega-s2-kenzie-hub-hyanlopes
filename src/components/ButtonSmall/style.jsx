import styled from "styled-components";

export const ButtonSmallStyled = styled.button`
  background-color: ${({ color }) => color};
  width: ${({ width }) => width};
  height: 25.58px;
  font-family: "Inter";
  font-weight: ${({ weight }) => weight};
  font-size: 9px;
  line-height: 21px;
  color: var(--Grey-0);
  border: none;
  border-radius: 4.06066px;
`;
