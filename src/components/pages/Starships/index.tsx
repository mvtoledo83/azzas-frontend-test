"use client";

import React, { useEffect, useState } from "react";
import BoxCard from "../../organisms/BoxCard";
import StarWarsService from "@/services/StarWarsService";
import { IStarship } from "./interface";
import { StarshipsContainer } from "./styles";

const Starships = () => {
  const [starships, setStarships] = useState<IStarship[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStarships = async () => {
    try {
      const data = await StarWarsService.getStarships();
      console.log("Starships data:", data.results);
      setStarships(data.results);
    } catch (error) {
      console.error("Erro ao buscar naves:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      <h1>Naves</h1>
      <StarshipsContainer>
        {starships.map((starship: IStarship, index: number) => (
          <BoxCard
            key={index}
            title={starship.name}
            content={`Modelo: ${starship.model} | Fabricante: ${starship.manufacturer}`}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt={starship.name}
            link={starship.url}
          />
        ))}
      </StarshipsContainer>
    </>
  );
};

export default Starships;
