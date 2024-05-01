import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <h1> Welcome!</h1>
      <Link href="/login">Fazer login</Link>
    </main>
  );
}
