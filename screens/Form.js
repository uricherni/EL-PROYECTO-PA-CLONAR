import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet,ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const axios = require('axios');

    const  Form =({route,navigation: { goBack } })=>{
        let ghostList = [];
        const [preguntas, setPreguntas] = useState([]);
        useEffect(() => {
            axios.get(`http://localhost:5000/Formulario`)
            .then(function (response) {
                console.log(response.data);
                ghostList=response.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log("Finally:")
                console.log(ghostList)
                setPreguntas(ghostList);
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
            <ImageBackground source={"https://img.freepik.com/vector-premium/fondo-pantalla-huella-perro_591410-63.jpg"} resizeMode="cover"  blurRadius={3} style={{width: '100%', height: '100%', opacity:'0,5'}}>
            <>
                <ScrollView style ={styles.Texto}>
                    {
                        preguntas.map(
                            (i) => (
                                <>
                                    <Text>{i.Descripcion}</Text>
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
        )
        /*
                return(
                    <ImageBackground source={"https://t4.ftcdn.net/jpg/02/24/25/83/360_F_224258392_sHXo6ayHm30zziBvL77trFOUDSl9R3oA.jpg"} resizeMode="cover" style={{width: '100%', height: '100%', opacity:'0,5'}}> 
                    <ScrollView style={styles.image} >

                        <Text >
                            Formulario Adoptar Animal
                        </Text>
                        <Text>
                            El Id del refugio animal es: {route.params.id} Pepita
                        </Text>
                        <ScrollView style ={styles.Texto}>
                            <Text>
                                Pregunta 1:
                                ¿está permitido tener perros en el lugar donde vivo?
                            </Text>
                            <TextInput
                            style={styles.input}
                            value={number}
                            placeholder="Respuesta"
                            keyboardType="numeric"
                        />
                        </ScrollView>
                    
                        <ScrollView style ={styles.Texto}>
                            <Text>
                                Pregunta 2:
                                ¿tengo los recursos para cuidarlo y darle atención veterinaria si lo necesita?
                            </Text>
                            <TextInput
                            style={styles.input}
                            value={number}
                            placeholder="Respuesta"
                            keyboardType="numeric"
                        />
                        </ScrollView>
                    
                            <ScrollView style ={styles.Texto}>
                                <Text>
                                    Pregunta 3:
                                    ¿El lugar en donde vivo está cerrado y es seguro para el perro?
                                </Text>
                                <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="Respuesta"
                                keyboardType="numeric"
                            />
                            </ScrollView>
                    
                        <ScrollView style ={styles.Texto}>
                            <Text>
                                Pregunta 4:
                                ¿Estoy dispuesto a asumir este compromiso con el perro para toda su vida?                   
                            </Text>
                            <TextInput
                            style={styles.input}
                            value={number}
                            placeholder="Respuesta"
                            keyboardType="numeric"
                        />
                        </ScrollView>
                    
                        <ScrollView style ={styles.Texto}>
                            <Text>
                                Pregunta 5:
                                ¿Qué opinas sobre la castración?                    
                            </Text>
                            <TextInput
                            style={styles.input}
                            value={number}
                            placeholder="Respuesta"
                            keyboardType="numeric"
                        />
                        </ScrollView>
        
                        <ScrollView style ={styles.Texto}>
                            <Text>
                                Pregunta 6:
                                ¿Estarías de acuerdo en castrar cumplidos los 8 meses de edad?                    
                                
                            </Text>
                            <TextInput
                            style={styles.input}
                            value={number}
                            placeholder="Respuesta"
                            keyboardType="numeric"
                        />
                        </ScrollView>
                        

                        <TouchableOpacity   style={styles.Enviar}>
                            Enviar 
                        </TouchableOpacity>
                       
                     


                        
                    </ScrollView>
                    </ImageBackground>
        
                )
                */
            }

    const styles = StyleSheet.create({
        input: {
            backgroundColor: "white",
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
       Color:"#000",
       
        },
       
        Texto:{
            color: 'Black',
            fontSize: 15,
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

    export default Form;
    


   