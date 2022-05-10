import React from 'react'
import styled from 'styled-components'
import Carrinho from './Components/Carrinho'
import Filtro from './Components/Filtro'

const Estilo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`

const ProdutosStyled = styled.div`
  display: flex;
  border: 1px solid;
`
const Imagem = styled.img`
  height: 15rem;
`
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  text-align: center;
`
const AreaProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const produtos = [
  {
    id: 1,
    name: 'Camiseta Teste',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 2,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 3,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 4,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 5,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 6,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 7,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 8,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 9,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 10,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 11,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  },
  {
    id: 12,
    name: 'Camiseta Astronauta',
    value: 49.9,
    imageUrl: (
      <Imagem
        src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
        alt="Imagem do usuario"
      />
    )
  }
]

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: 'Camiseta Teste',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 2,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 3,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 4,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 5,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 6,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 7,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 8,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 9,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 10,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 11,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      },
      {
        id: 12,
        name: 'Camiseta Astronauta',
        value: 49.9,
        imageUrl: (
          <Imagem
            src="https://m.media-amazon.com/images/I/71R9NJ0hcML._AC_SX522_.jpg"
            alt="Imagem do usuario"
          />
        )
      }
    ]
  }

  filtrarProdutos = (valorMaximo, valorMinimo, buscarProduto) => {
    const listaDeProdutosExibidos = produtos.filter(produto => {
      if (
        produto.value >= Number(valorMinimo) &&
        produto.value <= Number(valorMaximo) &&
        produto.name.includes(buscarProduto)
      ) {
        return produto
      }
    })

    this.setState({
      produtos: listaDeProdutosExibidos
    })
  }

  render() {
    const listaDeProdutos = this.state.produtos.map((produto, index) => {
      return (
        <ProdutosStyled key={index}>
          <div>
            <div>{produto.imageUrl}</div>
            <p>{produto.name}</p>
            <p>Valor: R$ {produto.value}</p>
            <button>Adicionar ao Carrinho</button>
          </div>
        </ProdutosStyled>
      )
    })

    return (
      <Estilo>
        <div>
          <Filtro filtrarProdutos={this.filtrarProdutos.bind(this)} />
        </div>

        <AreaProduto>
          <p>Quantidade de produtos: 12</p>
          <p>Ordenação:</p>
          <Card>{listaDeProdutos}</Card>
        </AreaProduto>

        <div>
          <Carrinho></Carrinho>
        </div>
      </Estilo>
    )
  }
}

export default App
