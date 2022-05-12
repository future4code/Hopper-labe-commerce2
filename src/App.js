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
  padding: 10px;
  button {
    background: #3d94f6;
    background-image: -webkit-linear-gradient(top, #3d94f6, #1e62d0);
    background-image: -moz-linear-gradient(top, #3d94f6, #1e62d0);
    background-image: -ms-linear-gradient(top, #3d94f6, #1e62d0);
    background-image: -o-linear-gradient(top, #3d94f6, #1e62d0);
    background-image: -webkit-gradient(to bottom, #3d94f6, #1e62d0);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: #ffffff;
    font-family: Arial;
    margin: 5px;
    padding: 10px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
  button:hover {
    border: solid #337fed 1px;
    background: #1e62d0;
    background-image: -webkit-linear-gradient(top, #1e62d0, #3d94f6);
    background-image: -moz-linear-gradient(top, #1e62d0, #3d94f6);
    background-image: -ms-linear-gradient(top, #1e62d0, #3d94f6);
    background-image: -o-linear-gradient(top, #1e62d0, #3d94f6);
    background-image: -webkit-gradient(to bottom, #1e62d0, #3d94f6);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
  }

  p {
    color: white;
    margin: 0;
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
const Texto = styled.div`
  display: flex;
  h4 {
    padding-left: 3.5rem;
  }
`

const Section = styled.select`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 1.1rem;
  height: 1.5rem;
  width: 30%;
  padding: 0px;
  font-size: 15px;
  border-width: 2px;
  border-color: #cccccc;
  background-color: #3d94f6;
  color: #000000;
  border-style: solid;
`

const produtos = [
  {
    id: 1,
    name: 'Astronauta com Balões',
    value: 80,
    imageUrl: <Imagem src={Camisa1} alt="Astronauta com Balões" />
  },
  {
    id: 2,
    name: 'Astronauta com Sorvete',
    value: 84,
    imageUrl: <Imagem src={Camisa2} alt="Astronauta com Sorvete" />
  },
  {
    id: 3,
    name: 'Astronauta to Earth',
    value: 95,
    imageUrl: <Imagem src={Camisa3} alt="Astronauta to Earth" />
  },
  {
    id: 4,
    name: 'Baby Astronauta',
    value: 59,
    imageUrl: <Imagem src={Camisa4} alt="Baby Astronauta" />
  },
  {
    id: 5,
    name: 'Nasa',
    value: 90,
    imageUrl: <Imagem src={Camisa5} alt="Nasa" />
  },
  {
    id: 6,
    name: 'Espaço',
    value: 78,
    imageUrl: <Imagem src={Camisa6} alt="Espaço" />
  },
  {
    id: 7,
    name: 'Astronauta Usain Bolt',
    value: 69,
    imageUrl: <Imagem src={Camisa7} alt="Astronauta Usain Bolt" />
  },
  {
    id: 8,
    name: 'Universo',
    value: 75,
    imageUrl: <Imagem src={Camisa8} alt="Universo" />
  },
  {
    id: 9,
    name: 'Astronauta na Bike',
    value: 68,
    imageUrl: <Imagem src={Camisa9} alt="Astronauta na Bike" />
  },
  {
    id: 10,
    name: 'Raio x Astronauta',
    value: 77,
    imageUrl: <Imagem src={Camisa10} alt="Raio x Astronauta" />
  },
  {
    id: 11,
    name: 'Foto Astronauta',
    value: 56,
    imageUrl: <Imagem src={Camisa11} alt="Imagem do usuario" />
  },
  {
    id: 12,
    name: 'Camiseta Astronauta',
    value: 69,
    imageUrl: <Imagem src={Camisa12} alt="Imagem do usuario" />
  }
]

class App extends React.Component {
  state = {
    carrinho: [],
    produtos: [
      {
        id: 1,
        name: 'Astronauta com Balões',
        value: 80,
        imageUrl: <Imagem src={Camisa1} alt="Astronauta com Balões" />
      },
      {
        id: 2,
        name: 'Astronauta com Sorvete',
        value: 84,
        imageUrl: <Imagem src={Camisa2} alt="Astronauta com Sorvete" />
      },
      {
        id: 3,
        name: 'Astronauta to Earth',
        value: 95,
        imageUrl: <Imagem src={Camisa3} alt="Astronauta to Earth" />
      },
      {
        id: 4,
        name: 'Baby Astronauta',
        value: 59,
        imageUrl: <Imagem src={Camisa4} alt="Baby Astronauta" />
      },
      {
        id: 5,
        name: 'Nasa',
        value: 90,
        imageUrl: <Imagem src={Camisa5} alt="Nasa" />
      },
      {
        id: 6,
        name: 'Espaço',
        value: 78,
        imageUrl: <Imagem src={Camisa6} alt="Espaço" />
      },
      {
        id: 7,
        name: 'Astronauta Usain Bolt',
        value: 69,
        imageUrl: <Imagem src={Camisa7} alt="Astronauta Usain Bolt" />
      },
      {
        id: 8,
        name: 'Universo',
        value: 75,
        imageUrl: <Imagem src={Camisa8} alt="Universo" />
      },
      {
        id: 9,
        name: 'Astronauta na Bike',
        value: 68,
        imageUrl: <Imagem src={Camisa9} alt="Astronauta na Bike" />
      },
      {
        id: 10,
        name: 'Raio x Astronauta',
        value: 77,
        imageUrl: <Imagem src={Camisa10} alt="Raio x Astronauta" />
      },
      {
        id: 11,
        name: 'Foto Astronauta',
        value: 56,
        imageUrl: <Imagem src={Camisa11} alt="Imagem do usuario" />
      },
      {
        id: 12,
        name: 'Camiseta Astronauta',
        value: 69,
        imageUrl: <Imagem src={Camisa12} alt="Imagem do usuario" />
      }
    ]
  }

  filtrarProdutos = (valorMaximo, valorMinimo, buscarProduto) => {
    const listaDeProdutosExibidos = produtos.filter(produto => {
      if (
        (produto.value >= valorMinimo && produto.value <= valorMaximo) ||
        produto.name.includes(buscarProduto)
      ) {
        return true
      }
      return false
    })

    this.setState({
      produtos: listaDeProdutosExibidos
    })
  }

  verificaOrdemDosProdutos = event => {
    if (event.target.value === 'crescente') {
      this.crescente()
    } else if (event.target.value === 'decrescente') {
      this.decrescente()
    }
  }

  crescente = () => {
    const produtosCrescente = this.state.produtos
    produtosCrescente.sort(function (a, b) {
      if (a.value < b.value) {
        return -1
      }
      if (a.value > b.value) {
        return 1
      }
      return 0
    })

    this.setState({
      produtos: produtosCrescente
    })
  }

  decrescente = () => {
    const produtosDecrescente = this.state.produtos
    produtosDecrescente.sort(function (a, b) {
      if (a.value > b.value) {
        return -1
      }
      if (a.value < b.value) {
        return 1
      }
      return 0
    })

    this.setState({
      produtos: produtosDecrescente
    })
  }

  adicionarCarrinho = (id) =>{
    const carrinhoCompras = this.state.carrinho.find(produto => id === produto.id)
      if (carrinhoCompras){
        const novoCarrinho = this.state.carrinho.map((produto)=>{
          if (id === produto.id){
            return {
              ...produto, quantidade: produto.quantidade+1
            }
          }
          return produto
        })
        this.setState({carrinho:novoCarrinho})
      } else{
        const novoProduto = this.state.produtos.find(produto => id === produto.id)
        const novoCarrinho = [...this.state.carrinho, {...novoProduto,quantidade:1}]
        this.setState({carrinho:novoCarrinho})
      }
  }

  // removerProduto = (id) =>{
  //   const deletaProduto = this.state.carrinho.filter((produto)=>{
  //     return produto.id !== id
  //   })
  //   this.setState({carrinho:deletaProduto})
  // }

  removerProduto = (id) => {
    const deletaProduto = this.state.carrinho.map((produto) => {
      if (produto.id === id){
        return {
          ...produto, quantidade: produto.quantidade -1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)
    this.setState({carrinho:deletaProduto})
  }

  render() {
    console.log(this.state.produtos)
    console.log(this.state.carrinho)
    const listaDeProdutos = this.state.produtos.map((produto, index) => {
      return (
        <ProdutosStyled key={index}>
          <div>
            <div>{produto.imageUrl}</div>
            <p>{produto.name}</p>
            <p>Valor: R$ {produto.value}</p>
            <button
              onClick={() => {
                this.adicionarCarrinho(produto.id)
              }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </ProdutosStyled>
      )
    })
    console.log(listaDeProdutos)
    return (
      <Estilo>
        <div>
          <Filtro filtrarProdutos={this.filtrarProdutos} />
        </div>

        <AreaProduto>
          <Texto>
            <h4>Quantidade de produtos: {this.state.produtos.length}</h4>
            <h4>Ordenação:</h4>
            <Section onChange={this.verificaOrdemDosProdutos}>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </Section>
          </Texto>
          <Card>{listaDeProdutos}</Card>
        </AreaProduto>

        <div>
          <Carrinho carrinho={this.state.carrinho} onClick={this.removerProduto}></Carrinho>
        </div>
      </Estilo>
    )
  }
}

export default App
