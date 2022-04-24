import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Grey-3);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 4px;
  padding: 10px 20px;

  div {
    height: 48.73px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    width: 100%;
    background-color: var(--Grey-4);
    margin: 10px 5px;
    padding: 9px;
    border-radius: 4.06066px;
  }
  h4 {
    color: var(--Grey-0);
  }
  p {
    color: var(--Grey-1);
  }
`;
