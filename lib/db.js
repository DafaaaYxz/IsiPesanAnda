import { MongoClient } from 'mongodb';

// GANTI LINK DI BAWAH DENGAN LINK MONGODB ATLAS KAMU
const url = "mongodb+srv://user:password@cluster.mongodb.net/database_ngl?retryWrites=true&w=majority";
const client = new MongoClient(url);

export async function konekDb() {
  await client.connect();
  return client.db("ngl_projek");
}
