import { dogs } from './constants'
import { MongoDBService } from './database'
import { DogsRepository } from './repositories'

const dbInstance = new MongoDBService()
const dogRepository = new DogsRepository(dbInstance)

const main = async () => {
	await dbInstance.connectDb()

	await dogRepository.createMany(dogs)
	const createdDogs = await dogRepository.getMany()
	await dogRepository.deleteMany()

	return createdDogs
}

main()
	.then(console.info)
	.catch(console.error)
	.finally(async () => {
		await dbInstance.disconnectDB()
	})
