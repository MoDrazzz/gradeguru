import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/dashboard/grades">
        http://localhost:3000/dashboard/grades
      </Link>
    </main>
  );
}
