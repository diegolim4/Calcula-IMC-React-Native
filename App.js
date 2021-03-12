import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 

export default function App(){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    function calcular(){
      const alt = altura / 100;
      const imc = peso / (alt * alt);
      
      if(imc < 18.6){
        alert(imc.toFixed(2) + ' Abaixo do Peso')
        
      }else if(imc >= 18.6 && imc <= 24.9 ){
        alert (imc.toFixed(2) + ' Peso Ideal')
      
      }else if(imc >= 25.0 && imc <= 29.90){
        alert (imc.toFixed(2) + ' Levemente Acima do Peso')

      }else if(imc >= 30.0 && imc <= 34.9){
        alert (imc.toFixed(2) + ' Obesidade Grau I')  
    
      }else if(imc >= 35.0 && imc <= 39.9){
        alert (imc.toFixed(2) + ' Obesidade Grau II')
    
      }else if(imc >= 40){
        alert (imc.toFixed(2) + ' Obesidade Grau III(Mórbirda)')
    
      }else{
        alert ('COLOQUE UM VALOR VALIDO ');
      }
      
    }

    return( 
      <View style={myStyles.container}> 
      <Text style={myStyles.titulo}>Calcule seu IMC</Text>

      <TextInput
        style={myStyles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso (Kg)"
        keyboardType="numeric"                
        />       
      
      <TextInput
        style={myStyles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Altura (cm)"
        keyboardType="numeric"                
        /> 

      <TouchableOpacity style={myStyles.botao} onPress={calcular}>
         <Text style={myStyles.textbotao}>CALCULAR</Text>
      </TouchableOpacity>      

      </View>                   
    );

}

const myStyles = StyleSheet.create({
  container:{
    flex:1,       
  },
  
  titulo:{
    textAlign:"center",
    marginTop: 40,
    fontSize: 25,
  },

  input:{
    backgroundColor: "#E0FFFF",
    borderRadius: 10,
    margin:20,
    padding:10,
    color:"#000000",
    fontSize:25,
  },

  botao:{
    backgroundColor:'#41Aef4',
    padding:15,
    margin:60,
    marginTop:15,
    borderRadius:10,    
  },

  textbotao:{
    textAlign:'center',
    color: 'white',
    fontSize:20,
  },
});

