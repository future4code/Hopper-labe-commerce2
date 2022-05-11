import React from 'react'
import styled from 'styled-components'
import Carrinho from './Components/Carrinho'
import Filtro from './Components/Filtro'

import Camisa1 from './img/camisa1.png'
import Camisa2 from './img/camisa2.png'
import Camisa3 from './img/camisa3.png'
import Camisa4 from './img/camisa4.png'
import Camisa5 from './img/camisa5.png'
import Camisa6 from './img/camisa6.png'
import Camisa7 from './img/camisa7.png'
import Camisa8 from './img/camisa8.png'
import Camisa9 from './img/camisa9.png'
import Camisa10 from './img/camisa10.png'
import Camisa11 from './img/camisa11.png'
import Camisa12 from './img/camisa12.png'




const Estilo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
  background-color: black;
  padding: 0;
  margin: 0;
`


const ProdutosStyled = styled.div`
  display: flex;
  border: 1px solid;
  button {
  background: #3D94F6;
  background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
  background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
  background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
  background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
  background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #FFFFFF;
  font-family: Arial;
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  }
  button:hover{
    border: solid #337FED 1px;
   background: #1E62D0;
   background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   text-decoration: none;
  }

  p{
    color: white;
  }
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
  color: gray;
  

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
            src={Camisa1}
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
            src={Camisa2}
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
            src={Camisa3}
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
            src={Camisa4}
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
            src={Camisa5}
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
            src={Camisa6}
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
            src={Camisa7}
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
            src={Camisa8}
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
            src={Camisa9}
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
            src={Camisa10}
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
            src={Camisa11}
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
            src={Camisa12}
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
