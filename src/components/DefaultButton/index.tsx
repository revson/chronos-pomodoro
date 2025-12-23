import styles from "./styles.module.css";
import type React from "react";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "green",
  ...props //rest pega tudo que nao foi declarado acima, nesse caso todos os outros atributos do button
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
