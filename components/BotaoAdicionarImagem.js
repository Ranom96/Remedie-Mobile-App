import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import TextInputComponent from './TextInputComponent';

export default function BotaoAdicionarImagem(props) {

    return (
        <Button
            style={{
                backgroundColor: '#79747E',
                borderRadius: 24,
                position: 'absolute',
                bottom: 400,
                
            }}
            onPress={() => {}}
        >
            <Text >+ Adicionar Imagem</Text>
        </Button>
    );
}