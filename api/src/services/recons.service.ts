import { boomify } from '@hapi/boom'

import { locations } from '@providers/mongo.provider'
import { CreateDTO, ResDTO } from '@utils/data.dto'

class ReconsService {
  async createLocation ({ name, message, latitude, longitude }: CreateDTO): Promise<ResDTO> {
    try {
      return await locations.insert({
        name,
        message,
        latitude,
        longitude,
        date: new Date()
      })
    } catch (err) {
      throw boomify(err)
    }
  }

  async getLocations (): Promise<ResDTO[]> {
    try {
      return await locations.find()
    } catch (err) {
      throw boomify(err)
    }
  }
}

export default new ReconsService()
