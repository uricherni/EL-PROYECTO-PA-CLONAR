import {View, TextInput, StyleSheet, TouchableOpacity, Image, Text} from "react-native-web"
import { useUser } from "../contexts/useUser"
import UserServicies from "../services/UserServicies"



const LogIn = () => {
  const { SetUser } = useUser()
  function onClick(){
    navigation.navigate("cuenta");
}
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
<>

<View style={{flex: 1,backgroundColor: '#6ED4C8'}}>
  
      <Image style={styles.img} source={require('../assets/logo.png')}></Image> 
     
      <View style={styles.Texto}>
          <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          keyboardType="numeric"
        />
      </View>
    
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
      <TouchableOpacity style={styles.Enviar} onTouchStart={onClick}>
          <Text> 
            ¿Aun no te registraste?
          </Text>
        </TouchableOpacity>
    </View>

</>
    

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
    backgroundColor: "white",
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 1,
   Color:"#000",
   height: "40px",
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




















