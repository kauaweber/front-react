
import { useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)

  async function buscarPokemonAleatorio() {
    // Gera um número aleatório de 1 até 1025
    const id = Math.floor(Math.random() * 1025) + 1

    setLoading(true)

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )

      const dados = await resposta.json()

      setPokemon(dados)
    } catch (erro) {
      console.log('Erro ao buscar Pokémon:', erro)
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <h1>Pokemon Aleatório</h1>

      <button onClick={buscarPokemonAleatorio}>
        Buscar Pokemon
      </button>

      {loading && <p>Carregando...</p>}

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
      )}
    </div>
  )
}

export default App

