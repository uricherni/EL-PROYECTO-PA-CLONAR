import { React, useEffect, useState } from "react";
import { View, TextInput, StyleSheet,ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const axios = require('axios');

const  Form = (params)=>{
    let Formulario = [];
    const [preguntas, setPreguntas] = useState([]);
   
    useEffect(() => {
        axios.get(`http://localhost:5000/Formulario`)
        .then(function (response) {
            console.log(response.data);
            Formulario = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            console.log("Finally:")
            console.log(Formulario)
            setPreguntas(Formulario);
        })
    }, [])
    const [Text] = useState("hola");
    const [number] = useState(null);
    const Vuelta = ({PetCard}) => {
        const Navigation=useNavigation()
        Navigation.navigate("Home")
    }
    console.log("preguntas:")
    console.log(preguntas)

    const [IdRespuesta, setIdRespuestaText] = useState('');

    const [Descripcion, setDescripcionText] = useState('');
    
    const [IdFormulario, setIdFormularioText] = useState('');

    const [IdUsuario, setIdUsuarioText] = useState('');

    const [IdMascota, setIdMascotaText] = useState('');

const Respuesta = (params)=>{
    axios.post(`http://localhost:5000/Respuestas/${IdFormulario}`, { IdRespuesta:IdRespuesta,Descripcion:Descripcion,IdFormulario:IdFormulario,IdUsuario:IdUsuario, IdMascota:IdMascota})
       
    
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return(
        <ImageBackground source={"https://i.pinimg.com/originals/29/8f/da/298fdab6747599714130d5670b81ceee.png"} resizeMode="cover"  blurRadius={4} style={{width: '100%', height: '100%', opacity:'0,5'}}>
        <>
            <ScrollView style ={styles.Texto}>
                {
                    preguntas.map(
                        (pregunta) => (
                            <>
                                <Text>{pregunta.Descripcion} </Text>
                                <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="Respuesta"
                                keyboardType="numeric"
                                
                                />
                                
                            </>
                            
                        )
                    )
                    
                }
            </ScrollView>
            <> <TouchableOpacity    blurRadius={3} style={styles.Enviar}  onPress={() => Respuesta(this)} >
                
                       <text> Enviar </text>
                    </TouchableOpacity></>
        </>
    
        </ImageBackground>
    )}

    export default Form;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        Color:"#000",
    },
    
    Texto:{
        color: 'Black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: "auto",
    
    },
    Enviar: {
        color: "black",
        border: "5px solid black",
        textAlign: "center",
        backgroundColor: "#03fff7",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100px",
        height: "30px",
    },

  scrollView: {
backgroundColor: 'pink',
marginHorizontal: 20,
},
    Cancelar: {
        color: "black",
        border: "5px solid black",
        textAlign: "center",
        backgroundColor: "#f0950c",
        marginLeft: "auto",
        marginRight: "auto",
        width: "300px",
        height: "40px",
        marginTop: "20px"
    },
    

});

/*const  Form = ({route,navigation: { goBack } })=>{
    let Formulario = [];
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/Formulario`)
        .then(function (response) {
            console.log(response.data);
            Formulario = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            console.log("Finally:")
            console.log(Formulario)
            setPreguntas(Formulario);
        })
    }, [])
    const [Text] = useState("hola");
    const [number] = useState(null);
    const Vuelta = ({PetCard}) => {
        const Navigation=useNavigation()
        Navigation.navigate("Home")
    }
    console.log("preguntas:")
    console.log(preguntas)
    return(
        <ImageBackground source={"https://i.pinimg.com/originals/29/8f/da/298fdab6747599714130d5670b81ceee.png"} resizeMode="cover"  blurRadius={4} style={{width: '100%', height: '100%', opacity:'0,5'}}>
        <>
            <ScrollView style ={styles.Texto}>
                {
                    preguntas.map(
                        (pregunta) => (
                            <>
                                <Text>{pregunta.IdFormulario}</Text>
                                <Text>{pregunta.Descripcion} </Text>
                                <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="Respuesta"
                                keyboardType="numeric"
                                
                                />
                                
                            </>
                            
                        )
                    )
                    
                }
            </ScrollView>
            <> <TouchableOpacity    blurRadius={3} style={styles.Enviar}>
                        Enviar 
                    </TouchableOpacity></>
        </>
    
        </ImageBackground>
    )*/