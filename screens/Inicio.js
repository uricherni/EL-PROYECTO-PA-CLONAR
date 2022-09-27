import { TouchableOpacity, View, StyleSheet, Image,Text } from "react-native"

export default Inicio = ({ navigation }) => {
    function login() {
        navigation.navigate("Registrarse")
    }
    return (
    
        <View style={styles.Fondo}>
           
        <Text style={styles.Texto}>Bienvenido a Petfy</Text>
            <Image style={styles.img} source={require('../assets/Inicio.png')}></Image>
            <TouchableOpacity style={styles.Enviar} onPress={login}>
            Continuar
            </TouchableOpacity>
        </View>
        
    )
}


const styles = StyleSheet.create({
    Fondo: {
        backgroundColor: '#cdfdfd',
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
        textAlign: "center",
        marginTop: "35px",
    },
    Texto: {
        marginTop: "100px",
        color: 'Black',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: "72px",
    },
    img: {
        height:'40%',
        width: "100%",
        aspectRatio: 1
    },
});