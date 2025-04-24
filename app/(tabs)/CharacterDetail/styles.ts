import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:12

    },
    cardView:{
        width: '100%',
        height: '50%',
        backgroundColor: '#e3dddc',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'baseline',
        paddingHorizontal:24,
        borderColor:'#633BBC',
        borderWidth: 2,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
    buttonView:{
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,

    }

})