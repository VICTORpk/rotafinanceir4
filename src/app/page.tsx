import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.conteiner}>
        <h1>Hello World!</h1>
        <div className={styles.perfil}
        ></div>
        <div className={styles.redes}>
          
        </div>
      </div>
    </div>
  );
}
