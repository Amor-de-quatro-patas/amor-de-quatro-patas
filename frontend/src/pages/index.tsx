import copy from "copy-to-clipboard";
import { toast } from 'react-toastify';

import styles from "../styles/home.module.scss";


export default function Home() {

  const copyToClipboard = () => {
    copy("amorde4patasvha@hotmail.com");
    
    toast.success("Chave do pix copiada");
  }

  return (
    <main className={styles.container}>
      <div>
        <h1>Quem somos?</h1>
        
        <img src="/images/dog-home.png" alt="Cachorro em abrigo"/>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div>
        <h1>Adote!</h1>

        <img src="/images/zezinho.png" alt="zezinho"/>

        <div>
          <p>Zézinho</p>

          <p>Adulto</p>
          <p>Macho</p>
        </div>
      </div>

      <div>
        <h1>Faça sua doação</h1>
          <a onClick={copyToClipboard}>
            <img src="/images/pix.png" alt="pix"/>
            <p>amorde4patasvha@hotmail.com</p>
          </a>
        <img src="/images/vakinha.png" alt="vakinha"/>
      </div>


      <div>
        <h1>Patrocinadores</h1>

        <img src="/images/aciv.png" alt="aciv"/>
        <img src="/images/agrivet.png" alt="aciv"/>
      </div>
    </main>
  )
}
