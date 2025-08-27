"use client";

import React, { useEffect, useState } from "react";
import BoxCard from "../../organisms/BoxCard";
import StarWarsService from "@/services/StarWarsService";
import { IPeople } from "./interface";
import { PeopleContainer } from "./styles";

const People = () => {
  const [people, setPeople] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = async () => {
    try {
      const data = await StarWarsService.getPeople();
      console.log("People data:", data.results);
      setPeople(data.results);
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      <h1>Pessoas</h1>
      <PeopleContainer>
        {people.map((person: IPeople, index: number) => (
          <BoxCard
            key={index}
            title={person.name}
            content={`Altura: ${person.height} | Peso: ${person.mass}`}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt={person.name}
            link={person.url}
          />
        ))}
      </PeopleContainer>
    </>
  );
};

export default People;
