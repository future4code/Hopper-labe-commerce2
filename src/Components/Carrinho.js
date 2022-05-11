import React from 'react'
import styled from 'styled-components'

const CarrinhoStyled = styled.div`
  display: block;
  border: 1px solid;
  width: 15rem;
  height: 20rem;
  padding: 1rem;

  input {
    width: 80%;
  }
  h2 {
    padding: 0;
    margin: 5px;
    color: gray;
  }
  p {
    display: inline;
    margin: 5px;
    color: gray;
  }
`

class Carrinho extends React.Component {
  render() {
    let valorTotal = 0
    const arrayComprasCarrinho = this.props.carrinho.map((produto, index) => {
      valorTotal += produto.value * produto.quantidade
      return (
        <div key={index}>
          <div>
            <p>{produto.quantidade}</p>
            <p>{produto.name}</p>
          </div>
        </div>
      )
    })

    return (
      <CarrinhoStyled>
        <h2>Carrinho:</h2>
        {arrayComprasCarrinho}
        <p>Valor total: R$ {valorTotal}</p>
      </CarrinhoStyled>
    )
  }
}

export default Carrinho
