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
                name='Inicio'
                component={Inicio}
            />
             <Stack.Screen
                name='Registrarse'
                component={Registrarse}
            />

            <Stack.Screen
                name='LogIn'
                component={LogIn}
            />
            <Stack.Screen
                name='cuenta'
                component={cuenta}
            />
        </Stack.Navigator>
)}

export default NotAuthStack;
