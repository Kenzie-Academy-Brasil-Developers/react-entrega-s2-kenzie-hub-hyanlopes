import { Container } from "./style";
const ListaTech = ({ lista, TechSelected, setTechSelected }) => {
  return (
    <Container>
      {lista.map((e) => (
        <div
          id={e.id}
          onClick={() => {
            window.scrollTo(0, 0);
            setTechSelected({
              status: true,
              tech: e.id,
              title: e.title,
            });
          }}
        >
          <h4>{e.title}</h4>
          <p>{e.status}</p>
        </div>
      ))}
    </Container>
  );
};
export default ListaTech;
