import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()

    return {
      data: users,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { username, email, password } = request.all()

    const alreadyExists = await User.findBy('email', email)

    if (alreadyExists) {
      return response.status(409).json({ message: 'User already exists' })
    }

    console.log({ username, email, password })

    const user = await User.create({ username, email, password })

    return user.toJSON()
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.param('id')
    const user = await User.find(id)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    return user
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.param('id')
    const user = await User.find(id)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    return user
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.param('id')
    const user = await User.find(id)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    return user
  }
}
