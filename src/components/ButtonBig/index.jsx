import { ButtonBigStyled } from "./sytle";
const ButtonBig = ({ children, color, size = "259px", ...rest }) => {
  return (
    <ButtonBigStyled color={color} {...rest} size={size}>
      {children}
    </ButtonBigStyled>
  );
};
export default ButtonBig;
