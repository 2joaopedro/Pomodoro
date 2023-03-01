import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Styles from './Styles'
export default function Welcome(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.containerLogo}>
                <Text style={Styles.logoText}>Pomodoro</Text>
            </View>

            <View style={Styles.containerButton}>
                <TouchableOpacity style={Styles.buttonShape} onPress={() => navigation.navigate('home')}>
                    <Text style={Styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

