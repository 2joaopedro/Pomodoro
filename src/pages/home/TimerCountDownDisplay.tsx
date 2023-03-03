import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
type Props ={
    countDownDate :Date;
}
export const TimerCountDownDisplay: React.FC<Props> = ({countDownDate }) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.timerCountDownText}>{countDownDate .getMinutes().toString().padStart(2, "0")}:{countDownDate .getSeconds().toString().padStart(2, "0")}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: '15%',
        borderWidth: 5,
        width: 255,
        height: 255,
        borderRadius: 250 / 2,
        borderColor: "#fff",
        marginVertical: 50,
      
    },
    timerCountDownText: {
      fontWeight: "800",
      fontSize: 55,
      color: "#fff",
    },
  });