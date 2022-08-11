import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Text, StyleSheet} from 'react-native';
import {  Button, Card, Title } from 'react-native-paper';


const ListaDeMascotas = () => {


    const [mascotas, setMascotas] = useState([]);

    const fechMascotas = () => {

         axios.get(`http://localhost:5000/Mascota`)
        .then((res) => {

            setMascotas(res.data);
        })
        .catch ((err) => {
            console.log('err', err);
        })
    }
}


/*const PetCard = ({refugio, nombre, edad, estado,raza,descripcion,id}) => {
    const Navigation=useNavigation()
    function onClick(){
        // alert('el id es:'+ id)
        Navigation.navigate("Form", {id, name: nombre})
    }*/
  
return (
    
 

    <Card>
            
            <Card.Content>

                    <Title>{mascotas.refugio}</Title>
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

const styles = StyleSheet.create({
    Imagen:{
        width: "100%",
        height: "200px",

    }

});
export default PetCard;





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
*/