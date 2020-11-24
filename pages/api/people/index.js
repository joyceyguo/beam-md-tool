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
  'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
  {$a: 1, $b: "This is test post 1 - parent.", $c: 1, $d: 1}
  )

  const people = await db.all('select * from category where id == 1');

  const result6 = await db.run('DELETE FROM Posts')

  res.json(people);
}
