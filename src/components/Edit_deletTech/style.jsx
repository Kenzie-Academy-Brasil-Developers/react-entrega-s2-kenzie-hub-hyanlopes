import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 30px 20px;

  .header {
    background-color: var(--Grey-2);
    border-radius: 3.20867px 3.20867px 0px 0px;
    height: 50.11px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  main {
    background-color: var(--Grey-3);
    padding: 20px;
  }
  main form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
  }
  select {
    background-color: var(--Grey-2);
    border-radius: 3.19812px;
    width: 263.79px;
    height: 38.38px;
    color: var(--Grey-1);
  }
  .Buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
