import { useState, useEffect } from "react";
import {
  GaleryContainer,
  Loading,
  SearchContainer,
  Spinner,
} from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { Header } from "../../../../components/header";
import { SearchBar } from "../components/searchBar";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  climate: string;
  population: string;
}

export const Planetas = () => {
  const [galery, setGalery] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("heaviest");

  useEffect(() => {
    async function getGalery() {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        if (!response.ok) {
          throw new Error("Erro em AP");
        }
        const data = await response.json();
        setGalery(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getGalery();
  }, []);

  const filteredCharacters = galery.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPopulation = [...filteredCharacters].sort((a, b) => {
    const populationA = parseInt(a.population, 10);
    const populationB = parseInt(b.population, 10);

    if (selectedOption === "biggest") {
      return populationB - populationA;
    } else if (selectedOption === "smallest") {
      return populationA - populationB;
    }
    return 0;
  });

  return (
    <GaleryContainer>
      <Header />
      <SearchBar />
      <SearchContainer>
        <div className="search-wrapper">
          <span>
            <MagnifyingGlass size={20} />
          </span>
          <input
            type="text"
            placeholder="Pesquise pelo nome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="characterOption"
              value="biggest"
              checked={selectedOption === "biggest"}
              onChange={() => setSelectedOption("biggest")}
            />
            Maiores Populações
          </label>
          <label>
            <input
              type="radio"
              name="characterOption"
              value="smallest"
              checked={selectedOption === "smallest"}
              onChange={() => setSelectedOption("smallest")}
            />
            Menores Populações
          </label>
        </div>
      </SearchContainer>
      {loading ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : (
        <>
          <div className="cards-container">
            {sortedPopulation.map((planet) => (
              <div key={planet.name} className="cards-content">
                <h2>Planeta {planet.name}</h2>
                <div>
                  <p>
                    Período de rotação <strong>{planet.rotation_period}</strong>
                  </p>
                  <p>
                    Periodo orbitário:{" "}
                    <strong>{planet.orbital_period}</strong>
                  </p>
                  <p>
                    Clima: <strong>{planet.climate}</strong>
                  </p>
                  <p>
                    Quantidade populacional:{" "}
                    <strong>{planet.population}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </GaleryContainer>
  );
};
