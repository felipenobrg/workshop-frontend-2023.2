import { useState, useEffect } from "react";
import { GaleryContainer, Loading, Spinner } from "./styles";

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

  useEffect(() => {
    async function getGalery() {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGalery(data.results);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getGalery();
  }, []);

  return (
    <GaleryContainer>
      {loading ? ( 
        <Loading><Spinner /></Loading>
      ) : (
        galery.map((character) => (
          <div key={character.name}>
            <p>Nome: <strong>{character.name}</strong></p>
            <p>Peso: <strong>{character.mass} kg</strong></p>
            <p>Cor do cabelo: <strong>{character.hair_color}</strong> </p>
            <p>Cor da pele: <strong>{character.skin_color}</strong></p>
            <p>Cor do oho: <strong>{character.eye_color}</strong></p>
            <p>Ano de Nascimento: <strong>{character.birth_year}</strong></p>
            <p>Genêro: <strong>{character.gender}</strong></p>
          </div>
        ))
      )}
    </GaleryContainer>
  );
};
