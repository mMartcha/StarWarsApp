import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:12

    },
    ShipsView:{
        width: '100%',
        height: '50%',
        backgroundColor: '#e3dddc',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        paddingHorizontal:24,
        paddingTop: 24,
        borderColor:'#633BBC',
        borderWidth: 2,
    },
    back:{
        width: 100,
        height: 50,
        backgroundColor: '#e3dddc',
        borderColor:'#633BBC',
        borderWidth: 2,
        marginBottom: 20,
        borderRadius:16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:6
    }
})