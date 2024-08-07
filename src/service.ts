import pg from 'pg'

const { Client } = pg
const client = new Client()

await client.connect()

type CurrencyName = 'rupees' | 'xp' | 'fragments'

/* docs example
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
*/

async function setCurrency(userID: number,name: CurrencyName = 'rupees',amount: number = 0): Promise<void> {
  // pretty sure this is not a good way to do this 
  await client.query(`INSERT OR REPLACE INTO users (id,${name}) VALUES (${userID},${amount})`)
}

async function getCurrency(userID: number,name: CurrencyName = 'rupees'): Promise<number> {
  const res = await client.query(`SELECT ${name} FROM users WHERE id = ${userID}`)
  return res.rows[0][name]
}

await client.end()