import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="container2">

        <div className="produto">
          <Image src="/tenis1.jpg" alt="Tênis 1" width={150} height={150} />
          <p>Nike</p>
          <p>R$ 299</p>
        </div>

        <div className="produto">
          <Image src="/tenis2.jpg" alt="Tênis 2" width={150} height={150} />
          <p>Adidas</p>
          <p>R$ 279</p>
        </div>

        <div className="produto">
          <Image src="/tenis3.jpg" alt="Tênis 3" width={150} height={150} />
          <p>Puma</p>
          <p>R$ 249</p>
        </div>

        <div className="produto">
          <Image src="/tenis4.jpg" alt="Tênis 4" width={150} height={150} />
          <p>Vans</p>
          <p>R$ 199</p>
        </div>

        <div className="produto">
          <Image src="/tenis5.jpg" alt="Tênis 5" width={150} height={150} />
          <p>Converse</p>
          <p>R$ 189</p>
        </div>

      </main>

      <footer className="rodape">
        Loja de Calçados
      </footer>
    </div>
  );
}