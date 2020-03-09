import React from 'react'
import { isEmpty } from 'lodash'
import './search-box.css'
import PokeDexService from '../../service/pokedex.service'

class SearchBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    PokeDexService.getPokeInfo()
      .then((response) => {
        this.setState({
          pokemon: response
        })
      })
  }

  renderSearchBox() {
    return (
      <div className="img">
        <div className="container search-box">
          <form className="flex">
            <input className="form-control form-control-lg pesquisa" placeholder="Qual o Pokémon?" />
            <button className="btn btn-secondary btn-lg button-search" type="submit">Pesquisar</button>
          </form>
        </div>
      </div>

    )
  }

  renderResultBox() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="results-box">

            {/* Card */}
            <div className="card bg-card mb-3 cards text-color"> {/*text-white*/}
              <div className="card-header nome-poke">Nome do Pokémon</div>
              <div className="card-body">
                {/* Tipos */}
                <div className="box-type1">
                  <h5 className="card-title">Tipos</h5>
                  <div className="types">
                    <div className="type-poke">
                      <p>Fogo</p>
                    </div>
                    <div className="type-poke">
                      <p>Fogo</p>
                    </div>
                  </div>
                </div>
                {/* Fraquezas */}
                <div className="box-type2">
                  <h5 className="card-title">Fraquezas</h5>
                  <div className="types">
                    <div className="type-poke">
                      <p>Terra</p>
                    </div>
                    <div className="type-poke">
                      <p>Agua</p>
                    </div>
                  </div>
                </div>
                {/*   */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (

      <div>
        {this.renderSearchBox()}

        {!isEmpty(this.state.pokemon)
          ? this.renderResultBox()
          : null
        }

      </div>
    )
  }
}

export default SearchBox