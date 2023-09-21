import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function TimeInput(props) {
    const [hora, setHora] = useState('00');
    const [minuto, setMinuto] = useState('00');

    const label = props.label;

    const horas = [
        { label: '00', value: '00' },
        { label: '01', value: '01' },
        { label: '02', value: '02' },
        { label: '03', value: '03' },
        { label: '04', value: '04' },
        { label: '05', value: '05' },
        { label: '06', value: '06' },
        { label: '07', value: '07' },
        { label: '08', value: '08' },
        { label: '09', value: '09' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
        { label: '13', value: '13' },
        { label: '14', value: '14' },
        { label: '15', value: '15' },
        { label: '16', value: '16' },
        { label: '17', value: '17' },
        { label: '18', value: '18' },
        { label: '19', value: '19' },
        { label: '20', value: '20' },
        { label: '21', value: '21' },
        { label: '22', value: '22' },
        { label: '23', value: '23' },
    ];

    const minutos = [
        { label: '00', value: '00' },
        { label: '01', value: '01' },
        { label: '02', value: '02' },
        { label: '03', value: '03' },
        { label: '04', value: '04' },
        { label: '05', value: '05' },
        { label: '06', value: '06' },
        { label: '07', value: '07' },
        { label: '08', value: '08' },
        { label: '09', value: '09' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
        { label: '13', value: '13' },
        { label: '14', value: '14' },
        { label: '15', value: '15' },
        { label: '16', value: '16' },
        { label: '17', value: '17' },
        { label: '18', value: '18' },
        { label: '19', value: '19' },
        { label: '20', value: '20' },
        { label: '21', value: '21' },
        { label: '22', value: '22' },
        { label: '23', value: '23' },
        { label: '24', value: '24' },
        { label: '25', value: '25' },
        { label: '26', value: '26' },
        { label: '27', value: '27' },
        { label: '28', value: '28' },
        { label: '29', value: '29' },
        { label: '30', value: '30' },
        { label: '31', value: '31' },
        { label: '32', value: '32' },
        { label: '33', value: '33' },
        { label: '34', value: '34' },
        { label: '35', value: '35' },
        { label: '36', value: '36' },
        { label: '37', value: '37' },
        { label: '38', value: '38' },
        { label: '39', value: '39' },
        { label: '40', value: '40' },
        { label: '41', value: '41' },
        { label: '42', value: '42' },
        { label: '43', value: '43' },
        { label: '44', value: '44' },
        { label: '45', value: '45' },
        { label: '46', value: '46' },
        { label: '47', value: '47' },
        { label: '48', value: '48' },
        { label: '49', value: '49' },
        { label: '50', value: '50' },
        { label: '51', value: '51' },
        { label: '52', value: '52' },
        { label: '53', value: '53' },
        { label: '54', value: '54' },
        { label: '55', value: '55' },
        { label: '56', value: '56' },
        { label: '57', value: '57' },
        { label: '58', value: '58' },
        { label: '59', value: '59' },
    ];



    const handleChangeHora = (itemValue) => {
        setHora(itemValue);
    };

    const handleChangeMinuto = (itemValue) => {
        setMinuto(itemValue);
    };

    const pickerContainerStyle = {
        flex: 1,
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 10,
        maxWidth: 120,
    };

    return (
        <>
            <Text style={{ marginTop: 40, marginBottom: 16, marginLeft: 88, color: 'grey' }}>{label}</Text>
            <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={pickerContainerStyle}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={hora}
                        onValueChange={handleChangeHora}
                    >
                        {horas.map((h) => (
                            <Picker.Item key={h.value} label={h.label} value={h.value} />
                        ))}
                    </Picker>
                </View>
                <Text style={{ color: 'black', fontSize: 32, marginHorizontal: 8 }}>:</Text>
                <View style={pickerContainerStyle}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={minuto}
                        onValueChange={handleChangeMinuto}
                    >
                        {minutos.map((m) => (
                            <Picker.Item key={m.value} label={m.label} value={m.value} />
                        ))}
                    </Picker>
                </View>
            </SafeAreaView>
            <Text style={{marginLeft: 88, color: 'grey', marginBottom: 24, marginTop: 8 }}>Hora                                Minuto</Text>
        </>


    );
}
