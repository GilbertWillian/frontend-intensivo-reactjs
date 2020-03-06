import AbstractRequestService from './abstract-request.service'

class PokeDexService {

  getPokeInfo() {
    const url = `/api/v2/pokemon/lucario`
    const method = `GET`

    return AbstractRequestService.makeRequest(url, method)
  }
}

export default new PokeDexService()
