import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerLogo:{
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%'
    },
    logoText:{
        color: '#FF5733',
        fontSize: 35,
        fontWeight: 'bold'
    },
    containerButton:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonShape:{
        backgroundColor: '#FF5733',
        borderRadius: 15,
        padding: '3.5%',
        width: '50%'
    },
    buttonText:{  
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default styles;
