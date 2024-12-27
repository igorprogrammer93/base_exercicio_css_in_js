import { FormEvent, useState } from "react";
import styled from "styled-components";

type Props = {
  aoPesquisar: (termo: string) => void;
};

// Styled Components com tipos explícitos
const Form = styled.form.attrs(() => ({
  role: "form", // Apenas para boas práticas de acessibilidade
}))<React.ComponentProps<"form">>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

const Input = styled.input.attrs(() => ({
  type: "search",
}))<React.ComponentProps<"input">>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  font-size: 16px;
`;

const Button = styled.button.attrs(() => ({
  type: "submit",
}))<React.ComponentProps<"button">>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>("");

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
      />
      <Button>Pesquisar</Button>
    </Form>
  );
};

export default FormVagas;

