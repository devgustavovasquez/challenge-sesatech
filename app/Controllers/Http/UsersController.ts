import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from '../../Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()

    return {
      data: users,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const validationSchema = schema.create({
      username: schema.string(),
      email: schema.string({}, [rules.email()]),
      password: schema.string(),
    })

    const { username, email, password } = await request.validate({ schema: validationSchema })

    const alreadyExists = await User.findBy('email', email)

    if (alreadyExists) {
      return response.status(409).json({ message: 'User already exists' })
    }

    const user = await User.create({ username, email, password })

    return user
  }

  public async show({ request, response }: HttpContextContract) {
    const id = request.param('id')

    if (!id || isNaN(Number(id))) {
      return response.status(400).json({ message: 'Invalid id' })
    }

    const user = await User.find(id)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    return user
  }

  public async update({ request, response }: HttpContextContract) {
    const id = request.param('id')

    if (!id || isNaN(Number(id))) {
      return response.status(400).json({ message: 'Invalid id' })
    }

    const validationSchema = schema.create({
      username: schema.string.optional(),
      password: schema.string.optional(),
    })

    const { username, password } = await request.validate({ schema: validationSchema })

    const user = await User.find(id)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    if (username) user.username = username
    if (password) user.password = password

    await user.save()

    return user
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id')

    if (!id || isNaN(Number(id))) {
      return response.status(400).json({ message: 'Invalid id' })
    }

    const user = await User.find(id)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    await user.delete()

    return response.status(204)
  }
}
