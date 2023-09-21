import React, { useState } from 'react';
import { SafeAreaView, Text, Modal, TouchableWithoutFeedback, View } from 'react-native';
import CheckBox from 'react-native-checkbox';

export default function ExibirConsultas(props) {
    const [isChecked, setIsChecked] = useState(false);

    const especialidade = props.especialidade
    const data = props.data
    const horario = props.horario
    const clinica = props.clinica

    const exibirStyle = {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 10,
        maxHeight: 120,
        maxWidth: 300,
        width: 300,
        paddingHorizontal: 16,
        marginTop: 16
    };

    const TextStyle = {
        marginHorizontal: 0,
        paddingHorizontal: 16,
        paddingVertical: 8,
    };

    const checkboxStyle = {
        marginHorizontal: 16,
        marginLeft: 16,
    }

    return (
        <SafeAreaView style={exibirStyle}>
            <CheckBox
                style={checkboxStyle}
                label=""
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <SafeAreaView style={{flexDirection: 'column'}}>
                <Text style={TextStyle}>{props.especialidade}</Text>
                <SafeAreaView style={{flexDirection: 'row'}}>
                <Text style={TextStyle}>{props.data}</Text>
                <Text style={TextStyle}>{props.horario}</Text>         
                </SafeAreaView>
                <Text style={TextStyle}>{props.clinica}</Text>
            </SafeAreaView>


        </SafeAreaView>
    );
}
