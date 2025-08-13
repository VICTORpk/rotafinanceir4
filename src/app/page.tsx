import Image from "next/image";
import styles from "./page.module.css";
import logo from '../../public/Ellipse 1.svg'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.superior}>

      </div>
      <div className={styles.central}>
        <section className={styles.perfil}>
          <div className={styles.foto}>
            <Image 
              src={logo}
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <h1>rotafinanceir4</h1>
          <h3>Investimentos</h3>
        </section>


        <section className={styles.botoes}>
          <a href="https://kiwify.app/velJGLO?afid=ciglHXq0" target="_blank" rel="noopener noreferrer">QUERO MUDAR DE VIDA DE VEZ</a>
          <a href="https://tiktok.com/@rotafinanceir4/" target="_blank" rel="noopener noreferrer">TIKTOK</a>
          <a href="https://threads.com/@rotafinanceir4/" target="_blank" rel="noopener noreferrer">THREADS</a>
          <a href="https://instagram.com/rotafinanceir4/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </section>
      </div>
      <div className={styles.inferior}>

      </div>
    </div>
  );
}
