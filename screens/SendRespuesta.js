import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Picker, Text, View } from "react-native";
import Valores from "../components/Valores";
import Imagen from "../components/Imagen";
const axios = require('axios');
 
{/* Declarar variables */ }


const IngresoDatos = () => {

  const [Descripcion, setDescripcion] = React.useState("");
  const [IdUsuario, setUsuario] = React.useState("");
  const [IdMascota, setMascota] = React.useState("");
  const [IdFormulario, setFormulario] = React.useState("");



 
  {/* Guardar datos en la BD*/ }
  const validar = () => {
    if (!Descripcion) return "Descripcion"
    if (!IdUsuario) return "IdUsuario"
    if (!IdMascota) return "IdMascota"
    if (!IdFormulario) return "IdFormulario"
    return undefined
  }
  const guardar = () => {
    console.log("llegue aca")
    let campo = validar()
    if (!campo) {
      let obj = {
        "IdRespuesta": 1,
        "IdUsuario": IdUsuario,
        "IdMascota": IdMascota,
        "IdFormulario": IdFormulario,
      };
      console.log(obj)
      axios.post('http://localhost:5000/Respuestas', obj)
        .then(function (response) {
          console.log(response);
          Alert.alert("Se ha guardado correctamente@")
        })
        .catch(function (error) {
          console.log('guardar');
          console.log(error);
        });
    } else {
      console.log("Complete el campo: " + campo)
      Alert.alert('Complete el campo:' + campo, 'My Alert Msg', [{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel', }, { text: 'OK', onPress: () => console.log('OK Pressed') },]);
    }
  }
 
  {/* Devolver lo que se muestra (frontend) */ }
 
  return (
    <SafeAreaView style={styles.body}>
      {/* Image picker */}
  
      {/* Ingresar nombre prenda */}
      <TextInput
        style={styles.dropdown}
        onChangeText={setFormulario}
        value={IdFormulario}
        placeholder="Ingrese el nombre de la prenda: "
      />
 
      {/* Ingresar parte cuerpo */}
      <View style={[styles.container, {
        flexDirection: "row"
      }]}>
        <View style={{ flex: 3 }}>
          <Picker
            selectedValue={Descripcion}
            style={styles.dropdown}
            onValueChange={(itemValue) => setDescripcion(itemValue)}
          >
            <Picker.Item label="Responder" value={0}></Picker.Item>
            <Valores name="Responder"></Valores>
          </Picker>
        </View>
        <View style={{ flex: 1 }}>
          <Imagen
            id={Descripcion}
          >
          </Imagen>
        </View>
      </View>
 
 
      {/* Ingresar tipo prenda*/}
 
      <Picker
        selectedValue={IdMascota}
        style={styles.dropdown}
        onValueChange={(itemValue) => setMascota(itemValue)}
      />
    
 
      <Picker
        selectedValue={IdUsuario}
        style={styles.dropdown}
        onValueChange={(itemValue) => setUsuario(itemValue)}
      >
        <Picker.Item label="Elija la ocasion de la prenda" value="" />
        <Valores name="OcasionPrenda"></Valores>
      </Picker>
 
    
  
      <Button
        onPress={guardar}
        title="Enviar"
        color="#655ea3"
        style={styles.boton}
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};
