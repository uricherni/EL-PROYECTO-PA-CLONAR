import { useEffect, useState } from "react";
import Pregunta from "./Components/Pregunta";
import formData from "./Hooks/formData";
import { View, TextInput, StyleSheet,ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const axios = require('axios');

export default function Form() {
    const [formValues, handleFormValueChange, setFormValues] = formData();
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/Formulario")
        .then(response => setPreguntas(response.data))
        .catch(console.error)
    }, [])
    const onSubmit = () => {
        // TODO: Validar form
        
        const postData = {  //  HARD CODED VALUES
            "IdUsuario":    "1",
            "IdFormulario": "1", 
            "IDMascota":    "1",
            "Descripcion": formValues,  
        }

        axios({
            method: "POST",
            json: postData,
            url: "http://localhost:5000/Respuestas",
        })
        .then(() => {
            // Show OK alert
        })
        .catch(() => {
            // Show error alert
        })

    }
    return (
        <>
            {
                preguntas.map(pregunta => 
                    <Pregunta 
                        label={pregunta.Descripcion}
                        formKey={pregunta.IdFormulario}
                        handleFormValueChange={handleFormValueChange}
                    />
            )}
            <TouchableOpacity onPress={onSubmit} blurRadius={3} style={styles.Enviar}>
                Enviar 
            </TouchableOpacity>

        <ImageBackground source={"https://i.pinimg.com/originals/29/8f/da/298fdab6747599714130d5670b81ceee.png"} resizeMode="cover"  blurRadius={4} style={{width: '100%', height: '100%', opacity:'0,5'}}></ImageBackground>
        </>
    )
}

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
    const [Text] = React.useState("hola");
    const [number] = React.useState(null);
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