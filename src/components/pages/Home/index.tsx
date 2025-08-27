import BoxCard from "../../organisms/BoxCard";
import { HomeList, HomeListItem, HomeSection } from "./styles";

const Home = () => {
  return (
    <HomeSection>
      <HomeList>
        <HomeListItem>
          <BoxCard
            link="/planetas"
            title="Planetas"
            content="Informações sobre planetas"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt="Planetas"
          />
        </HomeListItem>
        <HomeListItem>
          <BoxCard
            link="/naves"
            title="Naves"
            content="Informações sobre naves"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt="Naves"
          />
        </HomeListItem>
        <HomeListItem>
          <BoxCard
            link="/veiculos"
            title="Veículos"
            content="Informações sobre veículos"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt="Veículos"
          />
        </HomeListItem>
        <HomeListItem>
          <BoxCard
            link="/pessoas"
            title="Pessoas"
            content="Informações sobre pessoas"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt="Pessoas"
          />
        </HomeListItem>
        <HomeListItem>
          <BoxCard
            link="/especies"
            title="Espécies"
            content="Informações sobre espécies"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            imageAlt="Espécies"
          />
        </HomeListItem>
      </HomeList>
    </HomeSection>
  );
};

export default Home;
