import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet,ImageBackground, ScrollView } from "react-native";
const axios = require('axios');


 const baseUrl = "http://localhost:5000/Respuestas";

 const EnviarRespuesta = (TextInput, Descripcion) => {

     const [TextInput, setTextInput] = useState("");
     const [Descripcion, setDescripcion] = useState("");
     const [isLoading, setIsLoading] = useState(false);

const onChangeTextInputHandler = (TextInput) => {
 setTextInput(TextInput);
};

const onChangeDescripcionHandler = (Descripcion) => {
 setDescripcion(Descripcion);
};

const onSubmitFormHandler = async (event) => {
 if (!TextInput.trim() || !Descripcion.trim()) {
   alert("Name or Descripcion is invalid");
   return;
 }
 setIsLoading(true);
 try {
   const response = await axios.post(`${baseUrl}`, {
     TextInput,
     Descripcion,
   });
   if (response.status === 201) {
     alert(` You have created: ${JSON.stringify(response.data)}`);
     setIsLoading(false);
     setTextInput('');
     setDescripcion('');
   } else {
     throw new Error("An error has occurred");
   }
 } catch (error) {
   alert("An error has occurred");
   setIsLoading(false);
 }
};

return (
 <ScrollView contentContainerStyle={styles.container}>
   <View>
     <View style={styles.wrapper}>
       {isLoading ? (
         <Text style={styles.formHeading}> Creating resource </Text>
       ) : (
         <Text style={styles.formHeading}>Create new user</Text>
       )}
     </View>
     <View style={styles.wrapper}>
       <TextInput
         placeholder="Full Name"
         placeholderTextColor="#ffffff"
         style={styles.input}
         value={TextInput}
         editable={!isLoading}
         onChangeText={onChangeTextInputHandler}
       />
     </View>
     <View style={styles.wrapper}>
       <TextInput
         placeholder="Descripcion"
         placeholderTextColor="#ffffff"
         style={styles.input}
         value={Descripcion}
         editable={!isLoading}
         onChangeText={onChangeDescripcionHandler}
       />
     </View>
     <View>
       <Button
         title="Submit"
         onPress={onSubmitFormHandler}
         style={styles.submitButton}
         disabled={isLoading}
       />
     </View>
   </View>
 </ScrollView>
);
}

export default EnviarRespuesta;