import React, { useState } from "react";
import { Card } from "../../components/card";

import "../../styles/home.css";

export function Home() {

  const [personName, setPersonName] = useState();
  const [persons, setPersons] = useState([]);

  function handleAddPerson() {
    const newPerson = {
      name: personName,
      time: new Date().toLocaleDateString("pt", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setPersons(prevState => [...prevState, newPerson]);
  }

  return (
    <div className="container">
        <h1>Lista de presença</h1>
        <input 
          type="text" 
          placeholder="Digite o seu nome"
          onChange={e => setPersonName(e.target.value)} 
          />
        <button type="button" onClick={handleAddPerson}>
          Adicionar
          </button>

        {
          persons.map(person => <Card name={person.name} time={person.time} />)
        }
    </div>
  )
} 
