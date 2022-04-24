import { ButtonSmallStyled } from "./style";
const ButtonSmall = ({
  children,
  color,
  weight = 500,
  width = "79px",
  ...rest
}) => {
  return (
    <ButtonSmallStyled width={width} weight={weight} color={color} {...rest}>
      {children}
    </ButtonSmallStyled>
  );
};
export default ButtonSmall;
