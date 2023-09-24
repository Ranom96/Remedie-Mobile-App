import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

export default function BotaoCancelarSalvar() {
    return (
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button textColor='red' onPress={() => { }}>cancelar</Button>
            <Button textColor='#007AFF' onPress={() => { }}>Salvar</Button>
        </SafeAreaView>
    )
}