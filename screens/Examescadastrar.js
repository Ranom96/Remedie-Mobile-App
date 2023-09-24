import * as React from 'react'
import { View, SafeAreaView, Text, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import Header from '../components/Header'
import DateInput from '../components/DateInput'
import TextInputComponent from '../components/TextInputComponent'
import TimeInput from '../components/TimeInput'
import BotaoCancelarSalvar from '../components/BotaoCancelarSalvar'




export default function ExamesCadastrar(props) {
  const TextStyle = {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '400',
    marginHorizontal: 24,
    paddingTop: 16

  }

  return (
    <SafeAreaView>
      <Header title='Exames' />
      <ScrollView>
        <Text style={TextStyle}>Cadastre seus exames</Text>
        <DateInput label="Data" descricao="Insira a data do exame" />
        <TextInputComponent label="Local" descricao='Insira o nome do hospital/clínica' placeholder='Nome' />
        <TextInputComponent label="Médico" descricao='Insira o nome do seu médico' placeholder='Nome' />
        <TextInputComponent label="Especialidade" descricao='Insira a especialidade do exame' placeholder='Nome' />
        <TextInputComponent label="Exame" descricao='Insira o nome do exame' placeholder='Nome' />
        <TimeInput label="Horário do exame" />
        <BotaoCancelarSalvar />
        <View style={{ marginBottom: 100 }} /> 
      </ScrollView>
    </SafeAreaView>
  )
}