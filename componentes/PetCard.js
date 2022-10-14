import {useNavigation} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {Text, StyleSheet} from 'react-native';
import {  Button, Card, Title } from 'react-native-paper';
import axios from "axios";


const PetCard = ({mascota}) => {

    
    const Navigation = useNavigation()

    const {nombre, edad, estado, descripcion, foto, nombreRefugio, nombreRaza} = mascota;


    const BodyPostulacion = {
        
        IdUsuario: 2,
        IdMascota: 6,
        Aceptado: 1,
    }


    const onClick = async () => {
        const {data} = await axios.post({
            url: 'http://localhost:5000/Respuesta',
            data: BodyPostulacion
        }    
        )
        console.log(data)
        Navigation.navigate("Form")
    }
  
return (
    
 

    <Card>
            
            <Card.Content>

                    <Title>{nombreRefugio}</Title>
                    <Text> {nombre}</Text>
                    <Text> {edad}</Text>    
                    <Text> {foto}</Text>     
                    <Text> Estado: {estado}</Text>
                    <Text> Raza: {nombreRaza}</Text>
                    <Text> {descripcion}</Text>
            </Card.Content>
                <Card.Cover source={{ uri: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/07/20/1012478.jpg' }} />
                <Card.Actions>
                    <Button onTouchStart={onClick}>Aplicar</Button>
                </Card.Actions>
                
        </Card>
  );

}
export default PetCard;


const styles = StyleSheet.create({
    Imagen:{
        width: "100%",
        height: "200px",

    }

});





/*const axios = require('axios');

    const  Form =({route,navigation: { goBack } })=>{
        let ghostList = [];
        const [Mascota, setMascota] = useState([]);
        useEffect(() => {
            axios.get(`http://localhost:5000/Mascota`)
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
        console.log("Mascota")
        console.log(Mascota)



        

const PetCard = ({refugio, nombre, edad, estado,raza,descripcion,id}) => {
    
    
    
    const Navigation=useNavigation()
    
    function onClick(){
        // alert('el id es:'+ id)
        Navigation.navigate("Form", {id, name: nombre})
    }
  
return (
    
 

    <Card>
            
            <Card.Content>

                    <Title>{refugio}</Title>
                    <Text> {nombre}</Text>
                    <Text> {edad}</Text>         
                    <Text> Estado: {estado}</Text>
                    <Text> Raza: {raza}</Text>
                    <Text> {descripcion}</Text>
            </Card.Content>
                <Card.Cover source={{ uri: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/07/20/1012478.jpg' }} />
                <Card.Actions>
                    <Button onTouchStart={onClick}> Aplicar </Button>
                </Card.Actions>
                
        </Card>
        
 

  );

}
export default PetCard;


const styles = StyleSheet.create({
    Imagen:{
        width: "100%",
        height: "200px",

    }

});


*/