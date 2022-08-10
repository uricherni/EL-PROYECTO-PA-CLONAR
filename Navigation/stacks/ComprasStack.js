import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Compras from '../../screens/Compra';

const Stack = createNativeStackNavigator()

const StackMain = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Compras'
                component={Compras}
            />
        </Stack.Navigator>
    );
}

export default StackMain;