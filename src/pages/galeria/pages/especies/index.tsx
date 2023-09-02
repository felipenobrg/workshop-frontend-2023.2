import { MagnifyingGlass, Spinner } from "phosphor-react";
import { useState, useEffect } from "react";
import { Header } from "../../../../components/header";
import { GaleryContainer, Loading, SearchContainer } from "./styles";
import { SearchBar } from "../components/searchBar";

interface Especies {
  name: string;
  classification: string;
  designation: string;
  skin_colors: string;
  language: string;
}

export const Especies = () => {
  const [galery, setGalery] = useState<Especies[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getGalery() {
      try {
        const response = await fetch("https://swapi.dev/api/species/");
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
      </SearchContainer>
      {loading ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : (
        <>
          <div className="cards-container">
            {filteredCharacters.map((species) => (
              <div key={species.name} className="cards-content">
                <h2>Espécie {species.name}</h2>
                <div>
                  <p>
                    Classificação: <strong>{species.classification}</strong>
                  </p>
                  <p>
                    Designação: <strong>{species.designation}</strong>
                  </p>
                  <p>
                    Cor de pele: <strong>{species.skin_colors}</strong>
                  </p>
                  <p>
                    Idioma: <strong>{species.language}</strong>
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
