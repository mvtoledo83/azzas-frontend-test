"use client";

import React, { useEffect, useState } from "react";
import BoxCard from "../../organisms/BoxCard";
import StarWarsService from "@/services/StarWarsService";
import { IPlanet } from "./interface";
import { PlanetsContainer } from "./styles";

const Planets = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPlanets = async () => {
    try {
      const data = await StarWarsService.getPlanets();
      console.log("Planets data:", data.results);
      setPlanets(data.results);
    } catch (error) {
      console.error("Erro ao buscar planetas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      <h1>Planetas</h1>
      <PlanetsContainer>
        {planets.map((planet: IPlanet, index: number) => (
          <BoxCard
            key={index}
            title={planet.name}
            content={`Clima: ${planet.climate} | População: ${planet.population}`}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt={planet.name}
            link={planet.url}
          />
        ))}
      </PlanetsContainer>
    </>
  );
};

export default Planets;
