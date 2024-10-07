import  React, {Component} from 'react';
import { StyleSheet, Text, View,Switch,TextInput,Image,TouchableOpacity,Alert } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';



export default class App extends Component{
 
        constructor(props){
        super(props);
        this.state={
        Slider : 0,
        Switch: false,
        Picker: ' ',
        TextNome: ' ',
        TextIdade: ' ',
        };
    };
  
    
  
    botao =  () => {
      
    if (this.state.textNome === ' ' || this.state.textIdade === ' ' ){
      alert('preencha os campos')
    } else {
    
    Alert.alert('Dados do Usuário',`Nome: ${this.state.TextNome}\nIdade: ${this.state.TextIdade}\nSexo: ${this.state.Picker}\nLimite: ${this.state.Slider.toFixed(0)}\nEstudante: ${this.state.Switch ? "Sim" : "Não"} `)
    
    }
    }
    
    render(){
        return(
       
        <View style={styles.container}>
        <StatusBar backgroundColor='red'/>
        <View style={styles.logo}>
        <Image style={styles.imagemlogo} source={require('./src/icon.png')}></Image>
        <Text style={styles.textoLogo}>Tonhão's Bank</Text>
        </View>
        
        <View style={styles.corpo}> 
        
        <TextInput
        style={styles.input}
        onChangeText={(value)=>this.setState({TextNome:value})}
        placeholder='Nome'
        
        />
        
        <TextInput
        style={styles.input}
        onChangeText={(value)=>this.setState({TextIdade:value})}
        placeholder='Idade'
        keyboardType ="numeric"
        
        />
        
        

        <Picker
        style={styles.picker}
        selectedValue = {this.state.Picker}
        onValueChange = {(value)=> this.setState({Picker:value})}
        >
         <Picker.Item label="Sexo" value="" />
         <Picker.Item label="Masculino" value="Masculino" />
         <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
        

       <Slider style={styles.slider}
       minimumValue={0}
       maximumValue={1000}
       onValueChange={(value)=> this.setState({Slider:value})}
       value = {this.state.Slider}
       
       />
       <Text>{this.state.Slider.toFixed(0)}</Text>
       <Switch
       onValueChange={(value)=> this.setState({Switch:value})}
       value = {this.state.Switch}
       /> 

       <TouchableOpacity style={styles.botao} onPress = {this.botao}> 
       <Text style={styles.textoBotao}>Abrir conta</Text>
       </TouchableOpacity> 
        
        </View>
        </View>
        );
    }
}  

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    logo:{
      flex:2,
      alignItems:'center',
      backgroundColor:'white'
    },
    imagemlogo:{
      width: '50%',
      height:200,
      marginTop:'8%'
    },
    textoLogo:{
      fontSize:30,
      fontWeight: 'bold',

    },
    corpo:{
      flex:3,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent: 'center',
    },
    input:{
      height: 40,
      width: '80%',
      padding: 10,
      borderBottomWidth:2,
      margin: 5,
      
    },
    slider:{
      width:'50%',
      height:100,
      
    },
    botao:{

    },
    textoBotao:{

    },
    picker:{
      width:'50%',
      height:50,
      
    },
    
    
    })
