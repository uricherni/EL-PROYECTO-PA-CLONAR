import {useNavigation} from "@react-navigation/native";
import React from "react";

import {Text, StyleSheet} from 'react-native';
import {  Button, Card, Title } from 'react-native-paper';






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
const styles = StyleSheet.create({
    Imagen:{
        width: "100%",
        height: "200px",

    }

});
export default PetCard;





