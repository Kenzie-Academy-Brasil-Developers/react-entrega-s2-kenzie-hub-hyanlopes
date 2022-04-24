import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: center;
  height: 100vh;
  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: var(--Color-primary);
    font-size: 20px;
  }
  section {
    padding: 33.6911px 17.6477px;
    display: flex;
    flex-direction: column;
    height: 402.69px;
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
    height: 152px;
  }
  section p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    color: var(--Grey-1);
  }
`;
