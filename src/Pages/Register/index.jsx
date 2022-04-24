import { Container } from "./style";
import ButtonBig from "../../components/ButtonBig";
import ButtonSmall from "../../components/ButtonSmall";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cadastro = ({ authenticated }) => {
  const history = useHistory();
  const FormSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Mínimo de 8 dígitos"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const OnSubmitForm = (data) => {
    data = {
      ...data,
      bio: "Loren ipson",
      contact: "/linkedin",
    };
    Api.post("/users", data)
      .then((res) => {
        toast.success("Cadastro realizado!");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Email já cadastrado!");
      });
  };
  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }
  return (
    <Container>
      <div>
        <aside>
          <h1>Kenzie Hub</h1>
          <ButtonSmall
            color={" hsla(210, 11%, 15%, 1)"}
            onClick={() => history.push("/")}
          >
            Voltar
          </ButtonSmall>
        </aside>
        <section>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(OnSubmitForm)}>
            <label htmlFor="name">
              Nome {errors.name && <span> - {errors.name.message}</span>}
            </label>
            <Input
              type="text"
              placeholder="Digite seu nome..."
              id="name"
              register={register}
            />
            <label htmlFor="email">
              Email {errors.email && <span> - {errors.email.message}</span>}
            </label>
            <Input
              type="email"
              placeholder="Digite sua email..."
              id="email"
              register={register}
            />
            <label htmlFor="password">
              Senha{" "}
              {errors.password && <span> - {errors.password.message}</span>}
            </label>
            <Input
              type="password"
              placeholder="Digite seu senha..."
              id="password"
              register={register}
            />
            <label htmlFor="ConfirmPassword">
              Confirme sua senha{" "}
              {errors.confirmPassword && (
                <span> - {errors.confirmPassword.message}</span>
              )}
            </label>
            <Input
              type="password"
              placeholder="Confirme sua senha..."
              id="confirmPassword"
              register={register}
            />
            <label htmlFor="course_module">Selecionar módulo</label>
            <select
              name="course_module"
              id="course_module"
              {...register("course_module")}
            >
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
            <ButtonBig color={"#FF577F"} type="submit">
              Cadastrar
            </ButtonBig>
          </form>
        </section>
      </div>
    </Container>
  );
};
export default Cadastro;
