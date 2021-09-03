import { dogs } from './constants'
import { MongoDBService } from './database'
import { DogsRepository } from './repositories'

const main = async () => {
	const dbInstance = new MongoDBService()
	await dbInstance.connectDb()

	const dogRepository = new DogsRepository(dbInstance)

	await dogRepository.createMany(dogs)
	const createdDogs = await dogRepository.getMany()

	await dbInstance.disconnectDB()

	return createdDogs
}

main().then(console.info).catch(console.error)
