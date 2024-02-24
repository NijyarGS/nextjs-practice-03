import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  console.log("hello");

  const content = (
    <section>
      <h2>
        <Link href="/">back to Home</Link>
        <br />
        {users.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </h2>
    </section>
  );

  return content;
}
