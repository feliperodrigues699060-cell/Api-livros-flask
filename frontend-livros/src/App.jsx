
import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const resposta = await fetch('/api/livros')

      if (!resposta.ok) {
        throw new Error('Não foi possível buscar os livros.')
      }

      const dados = await resposta.json()
      setLivros(dados.livros)

    } catch (error) {
      setErro('Erro ao conectar com a API. Verifique se o Flask está funcionando.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="container">
      <h1>Catálogo de Livros</h1>

      <button onClick={buscarLivros}>
        Buscar Livros
      </button>

      {carregando && <p>Carregando livros...</p>}

      {erro && <p className="erro">{erro}</p>}

      <div className="lista-livros">
        {livros.map((livro) => (
          <div className="livro" key={livro.id}>
            <h2>{livro.titulo}</h2>
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

