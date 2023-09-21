import * as React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Header from '../components/Header'
import ExibirRemedios from '../components/ExibirRemedios';
import BotaoCadastrar from '../components/BotaoCadastrar';


export default function Remedios(props) {
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
    nomeRemedio: 'Dipirona',
    data: '27/10/2023',
    horario: '14h30',
    dosagem: '1 comprimido a cada 6h',
    nomeRemedio2: 'Nimesulida',
    horario2: '12h45',
};


  return (
    <>
      <Header title='Remédios' />
      <Text style={TextStyle}>Remédios do dia</Text>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
        <ExibirRemedios nomeRemedio={simulacaoBackend.nomeRemedio} data={simulacaoBackend.data} horario={simulacaoBackend.horario} dosagem={simulacaoBackend.dosagem}/>
        <ExibirRemedios nomeRemedio={simulacaoBackend.nomeRemedio2} data={simulacaoBackend.data} horario={simulacaoBackend.horario2} dosagem={simulacaoBackend.dosagem}/>
        <BotaoCadastrar />
      </SafeAreaView>
    </>
  );
}