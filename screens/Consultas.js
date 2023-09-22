
import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header';
import BotaoCadastrar from '../components/BotaoCadastrar';
import { useState, useEffect } from 'react';
import ExibirConsultas from '../components/ExibirConsultas';

export default function Consultas(props) {
  const onCadastrar = () => {
    props.onPress();
  };

  const TextStyle = {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '400',
    marginHorizontal: 24,
    paddingTop: 16

  }

  const simulacaoBackend = {
    especialidade: 'Cardiologista',
    data: '27/10/2023',
    horario: '14h30',
    clinica: 'BSB Clínica',
    especialidade2: 'Oftalmologista',
    data2: '15/11/2023',
    horario2: '12h45',
};


  return (
    <>
      <Header title='Consultas' />
      <Text style={TextStyle}>Estas são suas consultas</Text>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
        <ExibirConsultas dado1={simulacaoBackend.especialidade} dado2={simulacaoBackend.data} dado3={simulacaoBackend.horario} dado4={simulacaoBackend.clinica}/>
        <ExibirConsultas dado1={simulacaoBackend.especialidade2} dado2={simulacaoBackend.data2} dado3={simulacaoBackend.horario2} dado4={simulacaoBackend.clinica}/>
        <BotaoCadastrar />
      </SafeAreaView>
    </>
  );
}