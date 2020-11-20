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

    const people = await db.all('SELECT * from Category');
    console.log("CHILLERS", people)
})()
