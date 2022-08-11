import { TouchableOpacity, View, StyleSheet, Image,Text } from "react-native"

const Inicio = ({ navigation }) => {
    function login() {
        navigation.navigate("LogIn")
    }
    return (
        <>
        
        <View style={styles.Fondo}>
            <View>
                <Text style={styles.Texto}>Bienvenido a Petfy</Text>
            </View>
            <Image style={styles.img} source={require('../assets/Inicio.png')}></Image>
            <TouchableOpacity style={styles.Enviar} onPress={login}>
                Empezar
            </TouchableOpacity>
        </View>
        
        </>
        
        
    )
}
export default Inicio

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
        fontSize: "80px",
    },
    img: {
        height:'40%',
        width: "100%",
        aspectRatio: 1
    },
});