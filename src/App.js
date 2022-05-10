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
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:center;
  text-align:center;
`;
const AreaProduto = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
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
      }
    ]
  }

  render() {
    const listaDeProdutos = this.state.produtos.map((produto, index) => {
      return (
        <ProdutosStyled key = {index}>
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
          <Filtro></Filtro>
        </div>

        <AreaProduto>
          <p>Quantidade de produtos: 10</p>
          <p>
            Ordenação: <section></section>
          </p>
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
