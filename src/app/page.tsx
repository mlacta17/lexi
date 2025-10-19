// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Lexi</h1>
      <p>A tiny spelling-bee game.</p>
      <ul>
        <li><Link href="/play">Play the game</Link></li>
      </ul>
    </main>
  );
}