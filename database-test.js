import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// this is a top-level await
(async () => {
    // open the database
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

    const result2 = await db.run(
    'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
    {$a: 2, $b: "This is test post 2 - child.", $c: 2, $d: 1}
    )

    const result3 = await db.run(
    'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
    {$a: 3, $b: "This is test post 3 - child of child.", $c: 2, $d: 2}
    )

    const result4 = await db.run(
    'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
    {$a: 4, $b: "This is test post 4 - parent.", $c: 2, $d: 4}
    )

    const result5 = await db.run(
    'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
    {$a: 5, $b: "This is test post 2 - second child.", $c: 2, $d: 1}
    )

    const people = await db.all('SELECT * from Posts');

    const result6 = await db.run('DELETE FROM Posts')
    console.log("CHILLERS", people)
    console.log(JSON.stringify(people));



})()
