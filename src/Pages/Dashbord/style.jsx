import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--Grey-0);

  header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--Grey-3);
    padding: 15px 20px;
  }
  header h1 {
    font-size: 20px;
    color: var(--Color-primary);
  }
  .userInfo {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid var(--Grey-3);
    padding: 15px 0;
  }
  .userInfo h2,
  p {
    margin-left: 20px;
  }
  .userInfo p {
    margin-top: 5px;
    color: var(--Grey-1);
  }
  .userTech {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 15px 20px;
  }
  .AddNewTech {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    header {
      padding: 15px 140px;
    }
    .userInfo {
      padding: 15px 120px;
    }
    .userTech {
      padding: 15px 140px;
    }
  }
  @media (min-width: 1440px) {
    header {
      padding: 15px 220px;
    }
    .userInfo {
      padding: 15px 200px;
    }
    .userTech {
      padding: 15px 220px;
    }
  }
`;
