import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

export default function BotaoCancelarSalvar() {
    return (
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button color='red' onPress={() => { }}>cancelar</Button>
            <Button color='#007AFF' onPress={() => { }}>Salvar</Button>
        </SafeAreaView>
    )
}