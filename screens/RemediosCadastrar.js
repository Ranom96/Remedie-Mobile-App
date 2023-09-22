import * as React from 'react'
import { SafeAreaView, Text, ScrollView, View  } from 'react-native'
import Header from '../components/Header'
import TextInputComponent from '../components/TextInputComponent'
import BotaoAdicionarImagem from '../components/BotaoAdicionarImagem'
import TimeInput from '../components/TimeInput'
import BotaoCancelarSalvar from '../components/BotaoCancelarSalvar'

export default function RemediosCadastrar(props) {
  const TextStyle = {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '400',
    marginHorizontal: 24,
    paddingTop: 16

  }

  return (
    <SafeAreaView>
      <Header title='Remédios' />
      <ScrollView>
        <Text style={TextStyle}>Cadastre seus remédios</Text>
        <TextInputComponent label="Medicamento" descricao='Insira o nome do remédio' placeholder='Nome' />
        <TextInputComponent label="Dosagem" descricao='Qual é a dosagem? Ex: 1 dose = 2 capsulas' placeholder='Nome' />
        <BotaoAdicionarImagem/>
        <TimeInput label="Horário do remédio" />
        <BotaoCancelarSalvar />
        <View style={{ marginBottom: 100 }} /> 
      </ScrollView>
    </SafeAreaView>
  )
}