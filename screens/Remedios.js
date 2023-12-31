import * as React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Header from '../components/Header'
import ExibirConsultas from '../components/ExibirConsultas';
import BotaoCadastrar from '../components/BotaoCadastrar';


export default function Remedios({props, navigation}) {
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

  const botaoStyle = {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    position: 'absolute',
    bottom: 16,
  }

  const simulacaoBackend = {
    nomeRemedio: 'Dipirona',
    horario: '14h30',
    dosagem: '1 comprimido',
    nomeRemedio2: 'Nimesulida',
    horario2: '12h45',
};


  return (
    <>
      <Header title='Remédios' />
      <Text style={TextStyle}>Remédios do dia</Text>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
        <ExibirConsultas dado1={simulacaoBackend.nomeRemedio} dado2={simulacaoBackend.horario} dado3={simulacaoBackend.dosagem} />
        <ExibirConsultas dado1={simulacaoBackend.nomeRemedio2} dado2={simulacaoBackend.horario2} dado3={simulacaoBackend.dosagem} />
        <Button style={botaoStyle} onPress={() => navigation.navigate("RemediosCadastrar")}>
            <Text style={{ color: 'white', fontSize: 24, paddingTop: 8 }}>+</Text>
        </Button>
      </SafeAreaView>
    </>
  );
}