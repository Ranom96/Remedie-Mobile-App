import { Button } from 'react-native-paper';
import { Text } from 'react-native';

export default function BotaoCadastrar(props) {

    return (
        <Button
            style={{
                backgroundColor: '#007AFF',
                borderRadius: 24,
                position: 'absolute',
                bottom: 16,
            }}
            onPress={() => {}}
        >
            <Text style={{ color: 'white', fontSize:24, }}>+</Text>
        </Button>
    );
}