import styles from "./styles.module.css";
import type React from "react";

type DefaultInputProps = {
  /*esse tipo de declaração é chamado union type e diz que o type pode ser text, number, date, time, datetime-local, email ou password
  Colocando o & podemo fazer uma interseção de tipos de juntar os tipos. No caso abaixo ele diz que o type pode ser text ou number
  e juntamos tudo isso no elemento input atraves do &*/
  id: string; // Quando declarado aqui, substituimos o id do input
  //labelText?: string; //Quando colocar o ? ele diz que essa propriedade é opcional
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest //rest pega tudo que nao foi declarado acima, nesse caso todos os outros atributos do input
}: DefaultInputProps) {
  return (
    <>
      {/* tudo que estiver dentro de {} vai ser interpretado como javascript */}
      {/* Na linha abaixo nos temos a condicao if else
      labelText ? <label htmlFor={id}>{labelText}</label> : ""*/}
      {/*Na linha abaixo nos temos a condicao if, foi abreviado porque neste caso nao precisamos do else*/}
      {/*labelText && <label htmlFor={id}>{labelText}</label>*/}
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} className={styles.input} {...rest} />
    </>
  );
}
