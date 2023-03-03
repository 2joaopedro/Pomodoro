import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FF5733',
    },
    containerLogo:{
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%'
    },
    logoText:{
        color: '#FFF',
        fontSize: 50,
        fontWeight: 'bold'
    },
    containerButton:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonShape:{
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: '3.5%',
        width: '50%'
    },
    buttonText:{  
        alignSelf: 'center',
        color: '#FF5733',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default styles;
