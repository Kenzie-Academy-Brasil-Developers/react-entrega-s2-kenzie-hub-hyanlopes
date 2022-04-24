import { Container } from "./style";
import ButtonBig from "../../components/ButtonBig";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const FormSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const OnSubmitForm = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        localStorage.setItem(
          "@KenzieHub:token",
          JSON.stringify(res.data.token)
        );
        localStorage.setItem(
          "@KenzieHub:userId",
          JSON.stringify(res.data.user.id)
        );
        localStorage.setItem(
          "@KenzieHub:userName",
          JSON.stringify(res.data.user.name)
        );
        localStorage.setItem(
          "@KenzieHub:userCurso",
          JSON.stringify(res.data.user.course_module)
        );
        setAuthenticated(true);
        toast.success("Login realizado!");
      })
      .catch((err) => toast.error("Email ou senha inválidos!"));
  };
  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }
  return (
    <Container>
      <div>
        <h1>Kenzie Hub</h1>
        <section>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(OnSubmitForm)}>
            <label htmlFor="email">
              Email {errors.email && <span> - {errors.email.message}</span>}
            </label>
            <Input
              type="text"
              placeholder="Digite seu email..."
              id="email"
              register={register}
            />
            <label htmlFor="password">
              Senha{" "}
              {errors.password && <span> - {errors.password.message}</span>}
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha..."
              id="password"
              register={register}
            />
            <ButtonBig color={"#FF577F"}>Entrar</ButtonBig>
          </form>
          <p>Ainda não possui uma conta?</p>
          <ButtonBig
            color={"hsla(210, 7%, 56%, 1)"}
            onClick={() => history.push("/cadastro")}
          >
            Cadastre-se
          </ButtonBig>
        </section>
      </div>
    </Container>
  );
};
export default Login;
