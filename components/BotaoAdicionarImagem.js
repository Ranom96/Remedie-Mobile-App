import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import TextInputComponent from './TextInputComponent';

export default function BotaoAdicionarImagem(props) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                style={{
                    backgroundColor: 'white',
                    borderRadius: 28,
                    borderWidth: 1,
                    borderColor:'#79747E',
                    width: 200,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 32
                }}
                onPress={() => { }}
            >
                <Text style={{ color: '#6750A4', fontSize: 12, }}>+ Adicionar Imagem</Text>
            </Button>
        </View>
    );
}