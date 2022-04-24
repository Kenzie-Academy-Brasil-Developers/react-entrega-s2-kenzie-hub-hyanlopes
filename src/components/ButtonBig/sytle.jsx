import styled from "styled-components";

export const ButtonBigStyled = styled.button`
  background-color: ${(props) => props.color};
  padding: 0px 22.3336px;
  width: ${(props) => props.size};
  height: 38.5px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: var(--Grey-0);
  border: none;
  border-radius: 4.06066px;
`;
