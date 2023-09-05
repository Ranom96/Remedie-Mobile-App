import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Home() {
  const telaAtiva = 'Home';

  return (
    <SafeAreaView onPress={() => screens.navigate('Exames')}>
      <Text>Tela Home</Text>
    </SafeAreaView>
  );
}
