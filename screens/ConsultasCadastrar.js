import * as React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Header from '../components/Header'
import DateInput from '../components/DateInput'
import TextInputComponent from '../components/TextInputComponent'



export default function ConsultasCadastrar () {
    const TextStyle = {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '400',
        marginHorizontal: 24,
        paddingTop: 16

    }

  return(
    <SafeAreaView>
      <Header title='Consultas'/>
      <Text style={TextStyle}>Cadastre suas consultas</Text>
        <DateInput label="Data" descricao="Insira a data da consulta"/>
        <TextInputComponent label="Local" descricao='Insira o nome do hospital/clínica' placeholder='Nome'/>
        <TextInputComponent label="Médico" descricao='Insira o nome do seu médico' placeholder='Nome'/>
    </SafeAreaView>
  )
}