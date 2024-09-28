import "./Button.css";

const Button = ({ text, ...props }) => {
  return (
    // Renderiza o botão com texto e props adicionais
    <button className="button" type={props.type}>
      {text}
    </button>
  );
};

export default Button;
