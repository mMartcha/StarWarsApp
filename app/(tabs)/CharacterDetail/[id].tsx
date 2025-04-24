import { Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
type Character = {
    name: string;
    height: string;
    mass: string;
    hair_color: string
    skin_color: string
    eye_color: string
    gender: string

}

export default function CharacterDetail() {

    const [characters, setCharacters] = useState<Character>();
    const [loading, setLoading] = useState(true);
    const {id} = useLocalSearchParams()
    

    useEffect(() => {
        // Define a URL com base no ID usando switch
        let selectedUrl = "";
        switch (id) {
            case '1':
                selectedUrl = "https://swapi.py4e.com/api/people/1/";
                break;
            case '2':
                selectedUrl = "https://swapi.py4e.com/api/people/10/";
                break;
            case '3':
                selectedUrl = "https://swapi.py4e.com/api/people/4/";
                break;
            case '4':
                selectedUrl = "https://swapi.py4e.com/api/people/3/";
                break;
            case '5':
                selectedUrl = "https://swapi.py4e.com/api/people/2/";
                break;
            default:
                console.error("ID inválido");
                return;
        }
    
        // Faz a requisição com a URL definida
        axios.get(selectedUrl)
            .then((response) => {
                const data = response.data;
                setCharacters(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar os personagens:", error);
                setLoading(false);
            });
    }, [id]);

    return(
        <View style={styles.container}>
            <View style={styles.cardView}>
                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />  
                    <Text style={styles.text} onPress={() => console.log(characters)}>Nome: {characters?.name}</Text>
                </View>

                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialIcons name="height" size={24} color="black" />
                    <Text style={styles.text}>Altura: {characters?.height} cm</Text>
                </View>

                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialCommunityIcons name="weight" size={24} color="black" />
                    <Text style={styles.text}>Peso: {characters?.mass} kg</Text>
                </View>

                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialCommunityIcons name="hair-dryer-outline" size={24} color="black" />
                    <Text style={styles.text}>Cor do cabelo: {characters?.hair_color}</Text>
                </View>

                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialIcons name="person" size={24} color="black" />
                    <Text style={styles.text}>Cor da pele: {characters?.skin_color}</Text>
                </View>

                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialIcons name="remove-red-eye" size={24} color="black" />
                    <Text style={styles.text}>Cor dos olhos: {characters?.eye_color}</Text>
                </View>

                <View style={{flexDirection:'row', gap: 10, justifyContent:'center', alignItems:'flex-start'}}>
                    <MaterialCommunityIcons name="gender-male" size={24} color="black" />
                    <Text style={styles.text} onPress={() => console.log(id)}>Genero: {characters?.gender}</Text>
                </View>
            </View>

            <View style={styles.buttonView}>
                <Button
                    text="Naves"
                    bordercolor="#633BBC"
                    onPress={()=> router.push({
                        pathname: "/(tabs)/Ships/[id]",
                        params: { id: id }
                    }) }
                />
                <Button
                    text="Filmes"
                    bordercolor="#00B37E"
                    onPress={()=> router.push({
                        pathname: "/(tabs)/Movies/[id]",
                        params: { id: id }
                    }) }
                />

            </View>
        </View>
    )
}