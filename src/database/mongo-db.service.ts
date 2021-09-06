import { MongoClient } from 'mongodb'

import { configurations } from '../config'
import { MongoCollection } from '../models'

const client = new MongoClient(configurations.mongodb.url, {
	serverSelectionTimeoutMS: 5000
})

export const connect = async (): Promise<MongoClient> => client.connect()
export const disconnect = async (): Promise<void> => client.close()

export const getCollection = (collection: string): MongoCollection =>
	client.db(configurations.mongodb.db).collection(collection)
