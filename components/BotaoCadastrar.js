import { Button } from 'react-native-paper';
import { Text } from 'react-native';

export default function BotaoCadastrar(props) {
    const onCadastrar = () => {
        props.onPress();
    };

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
            <Text style={{ color: 'white' }}>+</Text>
        </Button>
    );
}