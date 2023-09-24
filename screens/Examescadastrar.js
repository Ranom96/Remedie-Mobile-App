import { React, useRef,  useEffect } from 'react'
import { View, SafeAreaView, Text, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import Header from '../components/Header'
import DateInput from '../components/DateInput'
import TextInputComponent from '../components/TextInputComponent'
import TimeInput from '../components/TimeInput'





export default function ExamesCadastrar({props, navigation}) {
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
        <DateInput label="Data" descricao="Insira a data da consulta" />
        <TextInputComponent label="Local" descricao='Insira o nome do hospital/clínica' placeholder='Nome' />
        <TextInputComponent label="Médico" descricao='Insira o nome do seu médico' placeholder='Nome' />
        <TextInputComponent label="Especialidade" descricao='Insira a especialidade do exame' placeholder='Nome' />
        <TextInputComponent label="Nome do Exame" descrico="Insira o nome do exame" placeholder='nome' />
        <TimeInput label="Horário da consulta" />
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button textColor='red' onPress={() => navigation.navigate("Consultas")}>cancelar</Button>
            <Button textColor='#007AFF' onPress={() => { }}>Salvar</Button>
        </SafeAreaView>
        <View style={{ marginBottom: 100 }} /> 
      </ScrollView>
    </SafeAreaView>
  )
}