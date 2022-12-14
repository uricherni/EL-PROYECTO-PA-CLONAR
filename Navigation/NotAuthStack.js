import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/Login';
import Inicio from '../screens/Inicio'
import Registrarse from '../screens/Registrarse';
import cuenta from '../screens/cuenta';

const Stack= createNativeStackNavigator()

const NotAuthStack= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options= {{headerShown: false}}
                name='Inicio'
                component={Inicio}
            />
             <Stack.Screen
                options= {{headerShown: false}}
                name='Registrarse'
                component={Registrarse}
            />

            <Stack.Screen
                options= {{headerShown: false}}
                name='LogIn'
                component={LogIn}
            />
            <Stack.Screen
                options= {{headerShown: false}}
                name='cuenta'
                component={cuenta}
            />
        </Stack.Navigator>
)}

export default NotAuthStack;
