import { MongoClient } from 'mongodb'

import { configurations } from '../config'
import { MongoCollection } from '../models'

const client = new MongoClient(configurations.mongodb.url)
export const db = client.db(configurations.mongodb.db)

export const connect = async (): Promise<MongoClient> => await client.connect()
export const disconnect = async (): Promise<void> => await client.close()

export const getCollection = async (collection: string): Promise<MongoCollection> =>
	client.db(configurations.mongodb.db).collection(collection)
