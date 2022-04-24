import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import ButtonSmall from "../../components/ButtonSmall";
import ListaTech from "../../components/ListaTech";
import { Api } from "../../services/api";
import { Container } from "./style";
import CadastroTech from "../../components/CadastroTechs";
import EditDeletTech from "../../components/Edit_deletTech";
const Dashboard = ({ authenticated = false, setAuthenticated }) => {
  const [addNewTech, setAddNewTech] = useState(false);
  const [TechSelected, setTechSelected] = useState({
    status: false,
    tech: {},
  });
  const [userId] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:userId")) || ""
  );
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    Api.get(`/users/${userId}`).then((res) => setTechs(res.data.techs));
  }, [TechSelected.status, addNewTech, userId]);

  const [name] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:userName")) || ""
  );
  const [course_module] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:userCurso")) || ""
  );

  if (!authenticated) {
    return <Redirect to={"/"}></Redirect>;
  }

  return (
    <Container>
      <header>
        <h1>Kenzie Hub</h1>
        <ButtonSmall
          weight={"bold"}
          color={" hsla(210, 11%, 15%, 1)"}
          onClick={() => {
            localStorage.clear();
            setAuthenticated(false);
          }}
        >
          Sair
        </ButtonSmall>
      </header>
      <section className="userInfo">
        <h2>Olá, {name}</h2>
        <p>{course_module}</p>
      </section>
      <section className="userTech">
        <section className="AddNewTech">
          <h3>Tecnologias</h3>

          <ButtonSmall
            width={"32px"}
            weight={"bold"}
            color={" hsla(210, 11%, 15%, 1)"}
            onClick={() => setAddNewTech(true)}
          >
            +
          </ButtonSmall>
        </section>
        {techs.length > 0 && (
          <ListaTech
            lista={techs}
            TechSelected={TechSelected}
            setTechSelected={setTechSelected}
          />
        )}
      </section>
      {addNewTech && <CadastroTech setAddNewTech={setAddNewTech} />}
      {TechSelected.status && (
        <EditDeletTech
          Tech={TechSelected.tech}
          techTitle={TechSelected.title}
          setTechSelected={setTechSelected}
        />
      )}
    </Container>
  );
};
export default Dashboard;
