import faker from 'faker'
import { DogModel } from '../models'

export const dogs: DogModel[] = Array(10)
	.fill({})
	.map(() => ({
		name: faker.name.firstName(),
		age: faker.datatype.number(13),
		pedigree: faker.datatype.boolean()
	}))
