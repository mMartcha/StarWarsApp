import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";



export default function Movies() {


    

    return(
        <View style={styles.container}>

            <Text style={{fontSize:20, fontWeight:'bold'}}>Integrantes:</Text>
            
        <View style={{marginTop:20,marginBottom:20}}>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Nome Completo:</Text> Marcello Stefenon Filho
            </Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Ra:</Text> 1132078
            </Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>E-mail:</Text> stefenonmarcello@gmail.com
            </Text>
        </View>

        <View>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Nome Completo:</Text> Guilherme Almeida Franciosi
            </Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Ra:</Text> 1131090
            </Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>E-mail:</Text> guifz10@gmail.com
            </Text>
        </View>

       
        </View>
    )
}