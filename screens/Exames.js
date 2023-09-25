import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";
import BotaoCadastrar from "../components/BotaoCadastrar";
import { useState, useEffect } from "react";
import ExibirExames from "../components/ExibirExames";

export default function Exames({ navigation }) {
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
<<<<<<< HEAD
    exame: "Exame de vistas"
  
=======
    exame: "Exame de vista",
>>>>>>> 2fa7054b24b86b43daa927ae8a6f6c435bb6f2de
  };
  const botaoStyle = {
    backgroundColor: "#007AFF",
    borderRadius: 24,
    position: "absolute",
    bottom: 16,
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
        <Button
          style={botaoStyle}
          onPress={() => navigation.navigate("ExamesCadastrar")}
        >
          <Text style={{ color: "white", fontSize: 24, paddingTop: 8 }}>+</Text>
        </Button>
      </SafeAreaView>
    </>
  );
}
