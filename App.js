import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [slider, setSlider] = useState(0);
    const [switchValue, setSwitchValue] = useState(false);

    const botao = () => {
        //Verifica os campos
        
        if (nome === '' || idade === '' || sexo === '') {
           alert('Preencha os campos');
        } else {
            Alert.alert(
                'Dados do Usuário',
                `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$${slider.toFixed(0)},00\nEstudante: ${switchValue ? "Sim" : "Não"}`
                
            );

         // Limpar os campos após o envio
            setNome('');
            setIdade('');
            setSexo('');
            setSlider(0);
            setSwitchValue(false);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2424' />
            
            <View style={styles.logo}>
            <Image style={styles.imagemlogo} source={require('./src/icon.png')} />
            
            </View>

            <View style={styles.corpo}>
             
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    placeholder='Nome'
                    value={nome} // Controlando o valor do TextInputNome
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setIdade}
                    placeholder='Idade'
                    keyboardType="numeric"
                    value={idade} // Controlando o valor do TextInputIdade
                />

                <Picker
                    style={styles.picker}
                    selectedValue={sexo} // Usando o estado para o valor selecionado
                    onValueChange={(value) => setSexo(value)}
                >
                    <Picker.Item label="Selecione seu sexo" value="" />
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Feminino" value="Feminino" />
                </Picker>

                <Text style={styles.texto2}>Quanto de limite deseja?</Text>

                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1000}
                    onValueChange={setSlider} // Atualizando o estado do slider
                    value={slider}
                    thumbTintColor={'black'}
                    minimumTrackTintColor={'black'}
                />
                <Text style={styles.textSlider}>Limite: R${slider.toFixed(0)},00</Text>

                <Switch
                    onValueChange={setSwitchValue} // Atualizando o estado do switch
                    value={switchValue}
                />

                <TouchableOpacity style={styles.botao} onPress={botao}>
                    <Text style={styles.textoBotao}>Abrir conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'white',
        
        
    },
    imagemlogo: {
        width: '50%',
        height: 200,
        marginTop: '8%'
    },
    textoLogo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    corpo: {
        flex: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input: {
        height: 40,
        width: '80%',
        padding: 10,
        borderWidth:2,
        margin:10,
        borderRadius:10,
    },
    slider: {
        width: '80%',
        height: 100,
        

    },
    textSlider:{
      fontSize:15,
      marginTop:-40,
      fontWeight:'bold'
    },
    botao: {
        backgroundColor: '#2424', 
        padding: 10,
        borderRadius: 5,
        marginBottom:20,
    },
    texto2:{
      fontSize:15,
      fontWeight:'bold',
      marginTop:30,
      marginBottom:-30,
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
    picker: {
        width: '60%',
        height:30,
        backgroundColor:'#2424',
      
        
    },
});
