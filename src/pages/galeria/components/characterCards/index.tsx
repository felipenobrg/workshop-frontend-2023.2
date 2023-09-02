import { useState, useEffect } from "react";
import { GaleryContainer, Loading, SearchContainer, Spinner } from "./styles";

interface Character {
  name: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const CharacterCards = () => {
  const [galery, setGalery] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("heaviest");

  useEffect(() => {
    async function getGalery() {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
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

  const sortedCharacters =
    selectedOption === "heaviest"
      ? filteredCharacters.sort(
          (a, b) => parseFloat(b.mass) - parseFloat(a.mass)
        )
      : filteredCharacters.sort(
          (a, b) => parseFloat(a.mass) - parseFloat(b.mass)
        );

  return (
    <GaleryContainer>
      <SearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              name="characterOption"
              value="heaviest"
              checked={selectedOption === "heaviest"}
              onChange={() => setSelectedOption("heaviest")}
            />
            Mais Pesados
          </label>
          <label>
            <input
              type="radio"
              name="characterOption"
              value="lightest"
              checked={selectedOption === "lightest"}
              onChange={() => setSelectedOption("lightest")}
            />
            Mais Leves
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
            {sortedCharacters.map((character) => (
              <div key={character.name} className="cards-content">
                <h2>{character.name}</h2>
                <div>
                  <p>
                    Peso: <strong>{character.mass} kg</strong>
                  </p>
                  <p>
                    Cor do cabelo: <strong>{character.hair_color}</strong>
                  </p>
                  <p>
                    Cor da pele: <strong>{character.skin_color}</strong>
                  </p>
                  <p>
                    Cor do olho: <strong>{character.eye_color}</strong>
                  </p>
                  <p>
                    Ano de Nascimento: <strong>{character.birth_year}</strong>
                  </p>
                  <p>
                    Gênero: <strong>{character.gender}</strong>
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
