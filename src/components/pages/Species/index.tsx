"use client";

import React, { useEffect, useState } from "react";
import BoxCard from "../../organisms/BoxCard";
import StarWarsService from "@/services/StarWarsService";
import { ISpecies } from "./interface";
import { SpeciesContainer } from "./styles";

const Species = () => {
  const [species, setSpecies] = useState<ISpecies[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSpecies = async () => {
    try {
      const data = await StarWarsService.getSpecies();
      console.log("Species data:", data.results);
      setSpecies(data.results);
    } catch (error) {
      console.error("Erro ao buscar espécies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      <h1>Espécies</h1>
      <SpeciesContainer>
        {species.map((specie: ISpecies, index: number) => (
          <BoxCard
            key={index}
            title={specie.name}
            content={specie.classification}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt={specie.name}
            link={specie.url}
          />
        ))}
      </SpeciesContainer>
    </>
  );
};

export default Species;
