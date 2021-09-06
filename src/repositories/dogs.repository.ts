import { DogModel, MongoCollection } from '../models'

export class DogsRepository {
	constructor(private readonly databaseService: MongoCollection) {}

	async getMany(): Promise<DogModel[]> {
		const dogs = await this.databaseService.find({}).toArray()

		return dogs as DogModel[]
	}

	async createMany(input: DogModel[]): Promise<boolean> {
		const insert = await this.databaseService.insertMany(input)

		if (!insert) {
			return false
		}

		return true
	}
}
