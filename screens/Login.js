import {View, TextInput, StyleSheet, TouchableOpacity, Image, Text} from "react-native-web"
import { useUser } from "../contexts/useUser"
import UserServicies from "../services/UserServicies"



const LogIn = () => {
  const { SetUser } = useUser()
  const LogInUser = async () => {
    try {
      const islogged = await UserServicies.login("Uri", "1234")
      if (islogged) {
        SetUser(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (

    <View styles={{width:"100%"}}>
  
      <Image style={styles.img} source={require('../assets/logo.png')}></Image> 
      <Text>Ingrese nombre</Text>
      <View style={styles.Texto}>
          <TextInput
          style={styles.input}
          placeholder="Nombre"
          keyboardType="numeric"
        />
      </View>
      <Text>Ingrese contraseña</Text>
      <View style={styles.Texto}>
    
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          keyboardType="numeric"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.Enviar} onPress={() => LogInUser()}>
        Sign In
      </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
  Texto: {
    color: 'Black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  img:{
    margin:"3%",
    width: "94%",
    aspectRatio: 1
  },
  input: {

    height: 40,
    margin: 2,
    borderWidth: 3,
    borderColor: '#090B0D',
    borderRadius: 30,
    padding: 10,
  },
  Enviar: {
    margin: 2,
    color: "black",
    border: "5px solid black",
    textAlign: "auto",
    backgroundColor: "#5F8CE1",
    marginLeft: "auto",
    marginRight: "auto",
     height: "40px",
 
   
    borderColor: '#FFE919',
    borderRadius: 30,
    padding: 10,
  },

})

export default LogIn




















