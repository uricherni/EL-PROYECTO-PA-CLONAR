import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Paginas */
import Form from '../../screens/Form';
import Home from '../../screens/Home';


/* Creacion del stack de paginas */
const Stack = createNativeStackNavigator()

const StackMain = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Form'
                component={Form}
            />
          

        </Stack.Navigator>
    );
}

export default StackMain;