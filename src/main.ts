import { dogs } from './constants'
import { connect, disconnect } from './database'
import { DogsRepository } from './repositories'

const main = async () => {
	await connect()

	const dogRepository = new DogsRepository()

	await dogRepository.createMany(dogs)

	const createdDogs = await dogRepository.getMany()

	await disconnect()

	return createdDogs
}

main().then(console.info).catch(console.error)
