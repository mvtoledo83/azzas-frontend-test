"use client";

import React, { useEffect, useState } from "react";
import BoxCard from "../../organisms/BoxCard";
import StarWarsService from "@/services/StarWarsService";
import { Vehicle } from "./interface";
import { VehicleContainer } from "./styles";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVehicles = async () => {
    try {
      const data = await StarWarsService.getVehicles();
      console.log("Vehicles data:", data.results);
      setVehicles(data.results);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      <h1>Veículos</h1>
      <VehicleContainer>
        {vehicles.map((vehicle, index) => (
          <BoxCard
            key={index}
            title={vehicle.name}
            content={vehicle.manufacturer}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt={vehicle.name}
            link={vehicle.url}
          />
        ))}
      </VehicleContainer>
    </>
  );
};

export default Vehicles;
