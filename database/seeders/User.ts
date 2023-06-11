import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'John Doe',
        email: 'johndoe@email.com',
        password: '1234',
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
    ])
  }
}
