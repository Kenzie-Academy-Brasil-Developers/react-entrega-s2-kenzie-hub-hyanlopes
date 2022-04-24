import { InputStyled } from "./style";
const Input = ({ id, register, ...res }) => {
  return <InputStyled {...register(id)} {...res}></InputStyled>;
};
export default Input;
