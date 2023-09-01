import { CuriosidadesContainer } from "./styles";
import curiosidadeImage1 from "../../../../assets/curosidade-images/curiosidades-sobre-star-wars-01.png";
import curiosidadeImage2 from "../../../../assets/curosidade-images/curiosidades-sobre-star-wars-02.png";
import curiosidadeImage3 from "../../../../assets/curosidade-images/curiosidades-sobre-star-wars-03.png";
import curiosidadeImage4 from "../../../../assets/curosidade-images/curiosidades-sobre-star-wars-04.png";
import curiosidadeImage5 from "../../../../assets/curosidade-images/curiosidades-sobre-star-wars-05.png";

export const Curiosidades = () => {
  return (
    <CuriosidadesContainer id="curiosidades">
      <h1>5 Curiosidades sobre Star Wars</h1>
      <div className="curiosidade">
        <h2>1. A respiração de Darth Vader foi feita com um respirador de mergulho</h2>
        <img src={curiosidadeImage1} alt="Curiosidade 1" />
        <p>
          O som peculiar do maior vilão das galáxias foi criado pelo sonoplasta
          e designer de som estadunidense Ben Burtt. Ele desenvolveu o som
          colocando um pequeno microfone no bocal de um respirador de mergulho e
          gravou o som de sua própria respiração.
        </p>
      </div>
      <div className="curiosidade">
        <h2>2. A língua dos Ewoks não veio "do nada"</h2>
        <img src={curiosidadeImage2} alt="Curiosidade 2" />
        <p>
          A famosa língua falada pela tribo do Ewoks foi baseada no tibetano. Ao
          assistir um documentário sobre o tibetano (idioma da Região Autônoma
          do Tibete da República Popular da China) na BBC, Ben Burtt se inspirou
          e usou gravações de falantes nativos como base para os sons que se
          tornaram o idioma Ewok.
        </p>
      </div>
      <div className="curiosidade">
        <h2>3. Anakin seria um caçador de recompensas</h2>
        <img src={curiosidadeImage3} alt="Curiosidade 3" />
        <p>
          Originalmente, George Lucas havia pensado em Darth Vader como um
          caçador de recompensas intergalático. Porém, depois do desenvolvimento
          do personagem, decidiu deixar o conceito do caçador para Bobba Fett.
        </p>
      </div>
      <div className="curiosidade">
        <h2>4. Yoda é baseado em Albert Einstein</h2>
        <img src={curiosidadeImage4} alt="Curiosidade 4" />
        <p>
          O grande detentor da força foi inspirado visualmente no cientista
          Albert Einstein. Com seu visual criado pelo maquiador de efeitos
          especiais Stuart Freeborn, o Mestre Yoda possui os lábios superiores
          inspirados no bigode do físico. Dessa forma, Yoda teria consigo uma
          aura de sabedoria.
        </p>
      </div>
      <div className="curiosidade">
        <h2>5. Sofia Coppola já atuou na saga</h2>
        <img src={curiosidadeImage5} alt="Curiosidade 5" />
        <p>
          Atualmente conhecida como diretora dos filmes 'Encontros e
          Desencontros' (2003) e 'As Virgens Suicidas' (1999), Sofia Coppola
          atuou em 'Star Wars, Episódio I: A Ameaça Fantasma' como Saché, uma
          das acompanhantes de Padmé Amidala.
        </p>
      </div>
    </CuriosidadesContainer>
  );
};

