import GlobalStyle from "./styles/global"
import Routes from './Routers';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
