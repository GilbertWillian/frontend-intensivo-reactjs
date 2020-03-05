import React from 'react'
import './search-box.css'

function SearchBox() {
  return (

    <div>
      <div className="container search-box">
        <form className="flex">
          <input className="form-control form-control-lg" placeholder="Qual o Pokémon?" />
          <button className="btn btn-secondary btn-lg button-search" type="submit">Search</button>
        </form>
      </div>

      <div className="bg-light">
        <div className="container">
          <div className="results-box">

            {/* Card */}
            <div className="card text-white bg-card mb-3 cards">{/*style="max-width: 18rem;*/}
              <div className="card-header">Nome do Pokémon</div>

              <div className="card-body">

                <h5 className="card-title">Tipos</h5>
                <div className="types">
                  <div className="type-poke">
                    <p>Fogo</p>
                  </div>
                  <div className="type-poke">
                    <p>Fogo</p>
                  </div>
                </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBox