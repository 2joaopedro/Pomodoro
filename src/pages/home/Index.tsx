import React, {useState,useEffect} from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import { TimerCountDownDisplay } from './TimerCountDownDisplay';
import { TimerToggleButton } from './TimerToggleButton';
import { TimerModeDisplay, TimerModes } from "./TimeModeDisplay";

const FOCUS_TIME_MINUTES = 1 * 60 * 1000;
const BREAK_TIME_MINUTES = 1 * 60 * 1000;

export default function Home(){
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");
  useEffect(()=>{
    if(timerCount === 0){
      if(timerMode === 'Focus'){
        setTimerMode('Break')
        setTimerCount(BREAK_TIME_MINUTES)
      }
      else if(timerMode === 'Break'){
        setTimerMode('Focus')
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopTimer();
    }
  },[timerCount])
  const startTimer = () =>{
    setIsTimerRunning(true);
   const id = setInterval(() => setTimerCount((prev)=> prev - 1000), 1000)
   setTimerInterval(id);
  };
  const stopTimer = () =>{
    if(timerInterval != null){
        clearInterval(timerInterval);
    }
    setIsTimerRunning(false);
  }
  return(
    <SafeAreaView  style={{
      ...styles.container,
      ...{ backgroundColor: timerMode === "Break" ? "#2a9d8f" : "#FF5733"},
    }}>
         <TimerModeDisplay timerMode={timerMode} />
        <TimerCountDownDisplay countDownDate ={new Date(timerCount)}/>
        <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5733",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
