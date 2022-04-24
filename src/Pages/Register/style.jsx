import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  height: 100vh;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  aside {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  h1 {
    color: var(--Color-primary);
    font-size: 20px;
  }
  section {
    padding: 33.6911px 17.6477px;
    display: flex;
    flex-direction: column;
    height: 570.69px;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--Grey-3);
    margin-top: 20px;
    border-radius: 3.20867px;
  }
  section h2 {
    color: var(--Grey-0);
    font-size: 16px;
  }
  section form {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    height: 80%;
  }
  section p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    color: var(--Grey-1);
  }
  select {
    background-color: var(--Grey-2);
    border-radius: 3.19812px;
    width: 263.79px;
    height: 38.38px;
    color: var(--Grey-1);
  }
`;
