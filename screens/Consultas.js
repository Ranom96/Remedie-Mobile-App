
import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header';
import BotaoCadastrar from '../components/BotaoCadastrar';
import { useState, useEffect } from 'react';

export default function Consultas(props) {
  const onCadastrar = () => {
    props.onPress();
  };




  return (
    <>
      <Header title='Consultas' />
      <Text>Tela Consultas</Text>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          style={{
            backgroundColor: '#007AFF',
            borderRadius: 24,
            position: 'absolute',
            bottom: 16,
          }}
          onPress={onCadastrar}
        >
          <Text style={{ color: 'white' }}>+</Text>
        </Button>
      </SafeAreaView>
    </>
  );
}