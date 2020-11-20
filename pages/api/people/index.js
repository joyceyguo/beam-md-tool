import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default async function handler(req, res) {
  const db = await open({
    filename: './mydb.db',
    driver: sqlite3.Database
  })

  await db.migrate({
      /**
      * If true, will force the migration API to rollback and re-apply the latest migration over
      * again each time when Node.js app launches.
      */
      force: true
  })
  const result = await db.run(
  'INSERT INTO Category (id, name) VALUES ($ONE, $TWO)',
  {$ONE: 2, $TWO: "Test2"}
)
  const meme = await db.run(
  'INSERT INTO Category (id, name) VALUES ($ONE, $TWO)',
  {$ONE: 3, $TWO: "4"}
  )

  const result2 = await db.run(
  'INSERT INTO Category (id, name) VALUES ($ONE, $TWO)',
  {$ONE: 5, $TWO: "TEST5"}
  )

  const people = await db.all('select * from category where id == 1');

  res.json(people);
}
