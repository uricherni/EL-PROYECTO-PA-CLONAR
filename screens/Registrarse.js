import { TouchableOpacity, View, Image, StyleSheet } from "react-native"


export default function Registrarse({ navigation }) {

    function redirect() {
        navigation.navigate("LogIn")
    }

    return (
        <>

            <View style={[styles.container, {
                flexDirection: "collumn",
            }]}>
                <TouchableOpacity
                    onPress={redirect}
                    style={{ width: 200, height: 200, flex: 2,marginLeft: "20%",marginTop: "20%" }}
                >
                    <Image
                        style={styles.img}
                        source={require('../assets/registerIcon.png')}>


                    </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={redirect}
                    style={{ width: 200, height: 200,flex: 2, marginLeft: "20%"}}
                >
                    <Image style={styles.img}
                        source={require('../assets/houseIcon.png')}
                    >


                    </Image>
                </TouchableOpacity>
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    img: {
        aspectRatio: 1
    },
    container: {
        backgroundColor: '#cdfdfd',
        textAlign: "center",
        padding: 20,
        flex: 1
    },
   

})