import { getUsers } from "@/lib/db";

export default async function Home() {
  const users = await getUsers();
  console.log("select users", users);
  return (
    <main>
      <h1>Muventi website</h1>
    </main>
  );
}
