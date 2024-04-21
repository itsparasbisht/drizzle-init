import { db } from "./db/dbClient";
import { userTable } from "./db/schema";

async function main() {
  await db.insert(userTable).values({
    name: "harry",
  });

  const user = await db.query.userTable.findMany();
  console.log(user);
}

main();
