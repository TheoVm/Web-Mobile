import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Atividades</h1>
        <ul>
          <li>
            <Link href="/atividade210">
              Exercício Página 210
            </Link>
          </li>
          <li>
            <Link href="/atividade231">
              Exercício Página 231
            </Link>
          </li>
          <li>
            <Link href="/atividade246">
              Exercício Página 246
            </Link>
          </li>
          <li>
            <Link href="/atividade263">
              Exercício Página 263
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}