import axios from "axios";

class StarWarsService {
  static async getPeople(page: number = 1) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}people/?page=${page}`
    );
    return response.data;
  }

  static async getPerson(id: number) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}people/${id}/`
    );
    return response.data;
  }

  static async getPlanets(page: number = 1) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}planets/?page=${page}`
    );
    return response.data;
  }

  static async getPlanet(id: number) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}planets/${id}/`
    );
    return response.data;
  }

  static async getStarships(page: number = 1) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}starships/?page=${page}`
    );
    return response.data;
  }

  static async getStarship(id: number) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}starships/${id}/`
    );
    return response.data;
  }

  static async getVehicles(page: number = 1) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}vehicles/?page=${page}`
    );
    return response.data;
  }

  static async getVehicle(id: number) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}vehicles/${id}/`
    );
    return response.data;
  }

  static async getSpecies(page: number = 1) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}species/?page=${page}`
    );
    return response.data;
  }

  static async getSpecie(id: number) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}species/${id}/`
    );
    return response.data;
  }
}

export default StarWarsService;
