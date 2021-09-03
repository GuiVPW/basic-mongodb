const { MONGODB_URL } = process.env

interface Configs {
	mongodb: MongoConfig
}

interface MongoConfig {
	url: string
}

export const configurations: Configs = {
	mongodb: {
		url: MONGODB_URL || 'mongodb://root:admin@localhost:27017'
	}
}
