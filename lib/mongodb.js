import { MongoClient } from 'mongodb';

// MASUKKAN CONNECTION STRING KAMU DI SINI
const MDB_URI = "mongodb+srv://user:pass@cluster.mongodb.net/ngl_db?retryWrites=true&w=majority";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(MDB_URI);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
