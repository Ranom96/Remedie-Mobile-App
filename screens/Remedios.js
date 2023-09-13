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
      <Header title='Remédios'/>
      <Text style={TextStyle}>Cadastre seus remédios</Text>
        <TextInputComponent label="Medicamento" descricao='Insira o nome do remédio' placeholder='Nome'/>
        <TextInputComponent label="Dosagem" descricao='Qual é a dosagem? Ex: 1 dose = 2 cápsulas' placeholder='Quantidade'/>
    </SafeAreaView>
  )
}