import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type TimerModes = "Focus" | "Break";

type Props = {
  timerMode: TimerModes;
};
export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <View style={styles.timerCountDownContainer}>
      <Text style={styles.timerCountDownText}>
      {timerMode === "Break" ? "Time for a " : "Time to"} {timerMode}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerCountDownContainer: {
    alignItems: "center",
    width: "100%",
  },
  timerCountDownText: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#fff",
  },
});