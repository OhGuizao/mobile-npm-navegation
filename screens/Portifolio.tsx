import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { estilo } from '../css/Styles';
import { AntDesign,FontAwesome } from '@expo/vector-icons'; 

export default function Portifolio({navigation}) {
    return (
        <View style={estilo.conteudo}>
            <View style={estilo.barra}>
                <TouchableOpacity style={estilo.btn} onPress={() => {
                    navigation.navigate("Home");
                }}>
                    <AntDesign name="home" size={24} color="white" />
                </TouchableOpacity>


                <TouchableOpacity style={estilo.btn} onPress={() =>{
                    navigation.navigate("Cliente");
                }}> 
                    <AntDesign name="user" size={24} color="white" />
                </TouchableOpacity>


                <TouchableOpacity style={estilo.btn} onPress={() => {
                    navigation.navigate("Contato");
                }}>
                    <AntDesign name="phone" size={24} color="white" />
                </TouchableOpacity>


                <TouchableOpacity style={estilo.btn} onPress={() => {
                    navigation.navigate("Portifolio");
                }}>
                <FontAwesome name="list" size={24} color="black" />
                </TouchableOpacity>


            </View>
        </View>
    );
}