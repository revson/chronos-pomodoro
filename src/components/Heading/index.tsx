import type React from "react";
import styles from "./styles.module.css";

/*Usar tipagem vem do typescript*/
type HeadingProps = {
  children: React.ReactNode; //Mudou o tipo de string para poder aceitar varios tipos diferentes
};

/*export function Heading(props: HeadingProps) {
  //const children = props.children; Abaixo uma outra maneira de escrever desestruturando o objeto
  const { children } = props;
  return <h1 className={styles.heading}>{props.children}</h1>;
}*/

// note que agora ao inves de pegar o objeto props inteiro estamos pegando direto o index children como uma variavel. Essa forma de escrever é do proprio javascript
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
