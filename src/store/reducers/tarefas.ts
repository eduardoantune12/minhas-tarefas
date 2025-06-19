import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar React revendo os exemplos do módulo 2',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar React'
    },
    {
      id: 2,
      descricao: 'Estudar na EBAC',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Python'
    },
    {
      id: 3,
      descricao: 'Estudar as APIs do projeto',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar APIs'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
      // tarefaParaEditar = action.payload
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
