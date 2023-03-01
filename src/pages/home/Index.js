import React, {useState,useEffect} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Styles from './Styles'
export default function Home(){
    const [timeSeconds, setTimeSeconds] = useState(15 * 60);

    const minutes = Math.floor (timeSeconds / 60);
    const seconds = timeSeconds % 60;
    useEffect(() => {
        if(timeSeconds === 0){
            alert("O tempo acabou!")
            return
        }else{
            setTimeout(() => {
                setTimeSeconds(timeSeconds - 1)
            }, 1000)
        }
    }, [timeSeconds])
    const navigation = useNavigation();
    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.containerLogo}>
                <Text style={Styles.logoText}>Pomodoro</Text>
            </View>
            <View style={Styles.containerForm}>
                <View style={Styles.formShape}>
                    <View style={Styles.formButton}>
                        <TouchableOpacity style={Styles.buttonShape}>
                            <Text style={Styles.buttonText}>Pomodoro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.buttonShape}>
                            <Text style={Styles.buttonText}>Short Break</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.buttonShape}>
                            <Text style={Styles.buttonText}>Long Break</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.formTime}>
                        <View style={Styles.time}>
                            <Text style={Styles.timeText}>{minutes.toString().padStart(2, "0")}</Text>
                            <Text style={Styles.timeText}>:</Text>
                            <Text style={Styles.timeText}>{seconds.toString().padStart(2, "0")}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
  
}

