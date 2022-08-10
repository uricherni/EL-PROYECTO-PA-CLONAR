import {useEffect, useState} from "react";
import { View, Text, StyleSheet} from "react-native";
import PetService from "../services/PetService";
import PetCard from "../componentes/PetCard"

const Home = ({}) => {
    const [mascotas, setMascotas] = useState()

    useEffect (()=>{
        PetService.getPets().then(setMascotas)
    },[])
    return (
        
        <View style={styles.fondo}>
            
            <Text style ={styles.Texto} >
                Lista de mascotas para adoptar:

            </Text>
            {mascotas &&
                <View style={ContenedorCards.container}>
                    {mascotas.map((mascota) => {
                        return <PetCard
                            refugio={mascota.refugio}
                            nombre={mascota.nombre}
                            edad={mascota.edad}
                            estado={mascota.estado}
                            raza={mascota.raza}
                            descripcion={mascota.descripcion}
                            foto={mascota.foto}
                            id={mascota.id}

                        />
                    })}
                </View>

            }

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Texto:{
        color: 'Black',
        fontSize: 12,
        fontWeight: 'bold',
        flex:1
        
        
    },
   

});
const ContenedorCards = StyleSheet.create({

    container: {

        alignContent: 'center',

        margin: 37,

    }
})
export default Home;