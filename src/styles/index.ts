import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Tarefa/styles'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  padding: 40px 0;
`

export const Campo = styled.input`
  border-radius: 8px;
  border-color: #666666;
  color: #666666;
  background-color: #fff;
  padding: 8px;
  width: 100%;
  font-weight: bold;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
