import { useState } from 'react';
import Link from "next/link";

import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";

import styles from "../styles/Formulario.module.css"

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(0)

  return (
    <div className={styles.formulario}>
      <div >
        <Cartao bgcolor="#ae1b1b">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
          text="Qntd portas?" 
          value={qtdePortas} 
          onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
        <EntradaNumerica 
          text="Porta com Presente?" 
          value={comPresente} 
          onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
