import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className="foto">
          <Image
            src="/Perfil.jpg"
            width={300}
            height={300}
            alt="Foto de perfil"
          />
          <h1>Theo Vieira Marcelino</h1>
        </div>
        <div className="bio">
          <p>
            Olá! Meu nome é Theo Viera Marcelino, tenho 20 anos e atualmente estou cursando o 5° período de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP).
          </p>
        </div>
        <div className="bio">
          <p>
            Durante minha caminhada pelo curso, tive a oportunidade de participar de diversos projetos acadêmicos que me permitiram desenvolver diversas habilidades. Entre eles foi a familiaridade com linguagens como Java e C, além de conhecimentos em gestão de projetos e afins.
          </p>
        </div>
        <div className="bio">
          <p>
            No meu tempo livre, gosto de passar meu tempo com amigos e família, seja jogando algum jogo online, ou uma partida de volei ou futebol. Sempre que possível, gosto de me dedicar a projetos pessoais, como desenvolvimento de jogos, ou até mesmo projetos de automação simples.
          </p>
        </div>
      </main>
    </div>
  );
}
