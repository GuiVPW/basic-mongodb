const { MONGODB_URL, MONGODB_DB } = process.env

interface Configs {
	mongodb: MongoConfig
}

interface MongoConfig {
	url: string
	db: string
}

export const configurations: Configs = {
	mongodb: {
		url: MONGODB_URL || 'mongodb://root:admin@localhost:27017',
		db: MONGODB_DB || 'example'
	}
}
