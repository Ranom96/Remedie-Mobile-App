import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';

export default function Home() {
  return (
    <SafeAreaView onPress={() => screens.navigate('Exames')}>
      <Header title='Home'/>
      <Text>Tela Home</Text>
    </SafeAreaView>
  );
}
