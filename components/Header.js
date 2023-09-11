import { SafeAreaView, View, Image, Text } from 'react-native';

export default function Header(props) {
    const HeaderStyle = {
        height: 88,
        backgroundColor: '#007AFF',
        color: 'white',
        fontSize: 32,
        paddingVertical: 8 
    }
    const TextHeaderStyle = {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 19
    }

    const title = props.title

    return (
        <SafeAreaView style={HeaderStyle}>
            <Text style={TextHeaderStyle}>{title}</Text>
        </SafeAreaView>
    )
}