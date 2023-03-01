import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FF5733',
    },
    containerLogo:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    logoText:{
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerForm:{
       marginTop: '50%'
    },
    formShape:{
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%',
        paddingVertical: '10%',
        height: '100%'
    },
    formButton:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonShape:{
        backgroundColor: '#FF5733',
        padding: '2%',
        borderRadius: 5,
    },
    buttonText:{
        color: '#fff',
        fontSize: 15,
    },
    formTime:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%'
    },
    time:{
        flexDirection: 'row',
    },
    timeText:{
        fontSize: 50
    }
})
export default styles;
