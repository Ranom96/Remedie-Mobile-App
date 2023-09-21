import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import TextInputComponent from './TextInputComponent';

export default function BotaoAdicionarImagem(props) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                style={{
                    backgroundColor: '#007AFF',
                    borderRadius: 24,
                    width: 200,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 32
                }}
                onPress={() => { }}
            >
                <Text style={{ color: 'white' }}>+ Adicionar Imagem</Text>
            </Button>
        </View>
    );
}