import React from "react"; 
import {StyleSheet, Pressable, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
type Props = {
    isTimerRunning: boolean;
    stopTimer: () => void;
    startTimer: () => void;
}
export const TimerToggleButton: React.FC<Props>= ({isTimerRunning,stopTimer, startTimer}) => {
    return(
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome   style={styles.icon} name={isTimerRunning ? 'pause' : 'play'} size={55} color={'#FFF'}/>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        marginTop: '15%'
      
    },
    icon: { alignSelf: "center"},
  });