import { MongoDBService } from '../database'
import { DogModel } from '../models'

export class DogsRepository {
	constructor(private readonly databaseService: MongoDBService) {
		this.databaseService.getCollection('dogs')
	}

	async getMany(): Promise<DogModel[]> {
		const dogs = (await this.databaseService.client?.find({}).toArray()) as DogModel[]
		return dogs
	}

	async createMany(input: DogModel[]): Promise<boolean> {
		const insert = await this.databaseService.client?.insertMany(input)

		if (!insert) {
			return false
		}

		return true
	}

	async deleteMany(): Promise<boolean> {
		const deleteMany = await this.databaseService.client?.deleteMany({})

		if (!deleteMany) {
			return false
		}

		return true
	}
}
