import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Importando as Telas de navegação
import { NavigationContainer } from '@react-navigation/native'
//Importando o Empilhamento das telas 'stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Importando as funções da pasta 'Sreens'
import Home from './screens/Home';
import Portifolio from './screens/Portifolio';
import Cliente from './screens/Cliente';
import Contato from './screens/Contato';
//Vamos criar um elemento que vai nos ajudar a empilhar as telas, abaixo...
const Pilha = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Home'>
        <Pilha.Screen name="Home" component={Home} options={{headerTitleAlign:'center', headerTintColor:'white',headerStyle:{backgroundColor:'#343a40'}}} />
        <Pilha.Screen name="Cliente" component={Cliente} options={{headerTitleAlign:'center', headerTintColor:'white',headerStyle:{backgroundColor:'#343a40'}}} />
        <Pilha.Screen name="Contato" component={Contato} options={{headerTitleAlign:'center', headerTintColor:'white',headerStyle:{backgroundColor:'#343a40'}}} />
        <Pilha.Screen name= "Portifolio" component={Portifolio} options={{headerTitleAlign:'center', headerTintColor:'white',headerStyle:{backgroundColor:'#343a40'}}} />
      </Pilha.Navigator>
    </NavigationContainer>

  );
}