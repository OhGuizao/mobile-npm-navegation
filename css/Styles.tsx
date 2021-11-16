import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    conteudo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#212529',
        color:'white'
    },
    barra:{
        width:'100%',
        height:50,
        backgroundColor:'#343a40',
        padding:10,
        borderRadius:10,
        position:'absolute',
        bottom:0,
        alignItems:'center',
        flexDirection:'row'
        
    },
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        backgroundColor:'#495057',
        borderRadius:10,
        height:40
    },
    txtbtn:{
        color:'white',
        fontSize:12
    }
})