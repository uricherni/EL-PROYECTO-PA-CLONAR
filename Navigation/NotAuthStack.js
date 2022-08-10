import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/Login';
import SignUp from '../screens/SignUp'

const Stack= createNativeStackNavigator()

const NotAuthStack= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='LogIn'
                component={LogIn}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />
        </Stack.Navigator>
)}

export default NotAuthStack;
