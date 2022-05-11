import React from 'react'
import styled from 'styled-components'

const FiltroStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 13rem;
  height: 20rem;
  padding: 1rem;
  input {
    width: 80%;
    padding: 0px;
    font-size: 15px;
    border-width: 2px;
    border-color: #CCCCCC;
    background-color: #3D94F6;
    color: #000000;
    border-style: solid;
     
    
  }
  h2 {
    padding: 0;
    margin: 0;
    color: gray;
  }
  p{
    color: gray;
  }
`

class Filtro extends React.Component {
  state = {
    valorMaximo: '',
    valorMinimo: '',
    buscarProduto: ''
  }

  onChangeValorMinimo = event => {
    this.setState({ valorMinimo: event.target.value })

    this.props.filtrarProdutos(
      this.state.valorMaximo,
      event.target.value,
      this.state.buscarProduto
    )
  }

  onChangeValorMaximo = event => {
    this.setState({ valorMaximo: event.target.value })

    this.props.filtrarProdutos(
      event.target.value,
      this.state.valorMinimo,
      this.state.buscarProduto
    )
  }

  onChangeBuscarProduto = event => {
    this.setState({ buscarProduto: event.target.value })

    this.props.filtrarProdutos(
      this.state.valorMaximo,
      this.state.valorMinimo,
      event.target.value
    )
  }

  render() {
    return (
      <FiltroStyled>
        <h2>Filtros</h2>
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={this.state.valorMinimo}
          onChange={this.onChangeValorMinimo}
        />
        <p>Valor máximo:</p>
        <input
          type="number"
          value={this.state.valorMaximo}
          onChange={this.onChangeValorMaximo}
        />
        <p>Busca por nome:</p>
        <input
          value={this.state.buscarProduto}
          onChange={this.onChangeBuscarProduto}
        />
      </FiltroStyled>
    )
  }
}

export default Filtro
