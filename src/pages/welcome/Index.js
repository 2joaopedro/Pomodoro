import React from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Styles from './Style'
export default function Welcome(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style={Styles.container}>

            <View style={Styles.containerLogo}>
                <Text style={Styles.logoText}>Pomodoro</Text>
            </View>

            <View style={Styles.containerButton}>
                <TouchableHighlight style={Styles.buttonShape}>
                    <Text style={Styles.buttonText}></Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

