import { MongoClient } from 'mongodb';

const uri = "ISI_DENGAN_LINK_MONGODB_KAMU"; // Tempel link MongoDB di sini
const client = new MongoClient(uri);

export async function konekKeDatabase() {
  await client.connect();
  return client.db("ngl_db");
}
