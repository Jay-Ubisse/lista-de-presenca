import { Card } from "../../components/card";

import "../../styles/home.css";

export function Home() {

  return (
    <div className="container">
        <h1>Lista de Presença</h1>
        <input type="text" placeholder="Digite o seu nome" />
        <button type="button">Adicionar</button>

        <Card />
        <Card />
    </div>
  )
}
