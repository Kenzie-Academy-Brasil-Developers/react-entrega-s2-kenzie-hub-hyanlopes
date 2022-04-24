import ButtonBig from "../../components/ButtonBig";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import { useState } from "react";
const CadastroTech = ({ setAddNewTech }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const FormSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const OnSubmitForm = (data) => {
    Api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        toast.success("Tech adicionada!");
        setAddNewTech(false);
      })
      .catch((err) => toast.error("Tech já existente!"));
  };
  return (
    <Container>
      <section className="header">
        <h3>Cadastrar Tecnologia</h3>
        <p onClick={() => setAddNewTech(false)}>X</p>
      </section>
      <main>
        <form action="" onSubmit={handleSubmit(OnSubmitForm)}>
          <label htmlFor="title">
            Nome {errors.title && <span> - {errors.title.message}</span>}
          </label>
          <Input
            type="text"
            placeholder="Nome da tecnologia..."
            id="title"
            register={register}
          ></Input>
          <label htmlFor="status">Selecionar status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <ButtonBig type="sumbit" color={"#FF577F;"}>
            Cadastrar Tecnologia
          </ButtonBig>
        </form>
      </main>
    </Container>
  );
};
export default CadastroTech;
