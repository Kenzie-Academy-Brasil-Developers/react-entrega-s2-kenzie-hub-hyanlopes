import ButtonBig from "../../components/ButtonBig";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import { useState } from "react";
const EditDeletTech = ({ setTechSelected, Tech, techTitle }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const FormSchema = yup.object().shape({
    title: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const OnSubmitForm = (data) => {
    Api.put(
      `/users/techs/${Tech}`,
      { status: data.status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        toast.success("Tech atualizada!");
      })
      .catch((err) => toast.error(err));
  };
  return (
    <Container>
      <section className="header">
        <h3>Tecnologia Detalhes</h3>
        <p onClick={() => setTechSelected({ status: false })}>X</p>
      </section>
      <main>
        <form action="" onSubmit={handleSubmit(OnSubmitForm)}>
          <label htmlFor="title">
            Nome do Projeto{" "}
            {errors.title && <span> - {errors.title.message}</span>}
          </label>
          <Input
            type="text"
            placeholder={techTitle}
            id="title"
            register={register}
            readonly
          ></Input>
          <label htmlFor="status">Selecionar status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <section className="Buttons">
            <ButtonBig
              type="sumbit"
              color={"hsla(340, 28%, 27%, 1)"}
              size={"170px"}
            >
              Salvar alterações
            </ButtonBig>
            <ButtonBig
              size={"78px"}
              color={"hsla(210, 7%, 56%, 1)"}
              onClick={() => {
                Api.delete(`/users/techs/${Tech}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }).then((res) => {
                  toast.success("Tech excluida com sucesso!");
                  setTechSelected({ status: false });
                });
              }}
            >
              Excluir
            </ButtonBig>
          </section>
        </form>
      </main>
    </Container>
  );
};
export default EditDeletTech;
