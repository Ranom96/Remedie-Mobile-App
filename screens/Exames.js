import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";
import BotaoCadastrar from "../components/BotaoCadastrar";
import { useState, useEffect } from "react";
import ExibirExames from "../components/ExibirExames";

export default function Exames (props) {
  const onCadastrar = () => {
    props.onPress();
  };

  const TextStyle = {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "400",
    marginHorizontal: 24,
    paddingTop: 16,
  };

  const simulacaoBackend = {
    especialidade: "Cardiologista",
    data: "27/10/2023",
    horario: "14h30",
    clinica: "BSB Clínica",
    exame: "Eletrocardiograma",
    especialidade2: "Oftalmologista",
    data2: "15/11/2023",
    horario2: "12h45",
    exame: "Exame de vista"
  
  };

  return (
    <>
      <Header title="Exames" />
      <Text style={TextStyle}>Estes são seus exames</Text>
      <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: 24 }}>
        <ExibirExames
          dado1={simulacaoBackend.especialidade}
          dado2={simulacaoBackend.data}
          dado3={simulacaoBackend.horario}
          dado4={simulacaoBackend.clinica}
          dado5={simulacaoBackend.exame}
        />
        <ExibirExames
          dado1={simulacaoBackend.especialidade2}
          dado2={simulacaoBackend.data2}
          dado3={simulacaoBackend.horario2}
          dado4={simulacaoBackend.clinica}
          dado5={simulacaoBackend.exame}
        />
        <BotaoCadastrar />
      </SafeAreaView>
    </>
  );
}
