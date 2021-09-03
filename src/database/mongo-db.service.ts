import { Collection, Db, Document, MongoClient } from 'mongodb'
import { configurations } from '../config'

export class MongoDBService extends MongoClient {
	private dbInstance!: Db
	public client?: Collection<Document>

	constructor() {
		super(configurations.mongodb.url)
	}

	async connectDb(): Promise<void> {
		await this.connect()
		const db = this.db(configurations.mongodb.db)

		console.info('Connected successfully to server')

		this.dbInstance = db
	}

	async disconnectDB(): Promise<void> {
		await this.close()
	}

	getCollection(collection: string): void {
		this.client = this.dbInstance.collection(collection)
	}
}
