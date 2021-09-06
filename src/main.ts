import { dogs } from './constants'
import { connect, disconnect, getCollection } from './database'
import { DogsRepository } from './repositories'

const main = async () => {
	await connect()

	const collection = await getCollection('dogs')
	const dogRepository = new DogsRepository(collection)

	await dogRepository.createMany(dogs)

	const createdDogs = await dogRepository.getMany()

	await disconnect()

	return createdDogs
}

main().then(console.info).catch(console.error)
