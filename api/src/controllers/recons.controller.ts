import { FastifyRequest, FastifyReply } from 'fastify'

import Service from '@services/recons.service'

const ReconsController = async (app, opts) => {
  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const { name, message, latitude, longitude }: any = request.body
    const data = await Service.createLocation({ name, message, latitude, longitude })
    reply.send(data)
  })

  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const data = await Service.getLocations()
    reply.send(data)
  })
}

export default ReconsController
