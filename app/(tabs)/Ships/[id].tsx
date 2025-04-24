import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Character = {

    starships: string
}

type Starship = {
    name: string;
    model: string;
    passengers: number;
};
export default function Ships() {

    const [starships, setStarships] = useState<Starship[]>([]);
    const [loading, setLoading] = useState(true);
    const {id} = useLocalSearchParams()
    

    useEffect(() => {
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
    
       
    
            axios.get(selectedUrl)
            .then(async (response) => {
                const characterData = response.data;
                setLoading(false);
                const starshipResponses = await Promise.all(
                    characterData.starships.map((url: string) => axios.get(url))
                );

                const starshipData = starshipResponses.map(res => res.data);
                setStarships(starshipData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados:", error);
                setLoading(false);
            })
    }, [id])
        

    

    return(
        <View style={styles.container}>
            
            <Pressable style={styles.back}onPress={() => router.back()}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
                <Text style={{fontSize:18}}>Voltar</Text>
            </Pressable>

            <View style={styles.ShipsView}>
                <Text style={{fontSize:18, fontWeight:'bold', marginBottom:30}}>Naves:</Text>    
                {starships.length > 0 ? (
                starships.map((starship, index) => (
                    <Text key={index} style={{fontSize:14, fontWeight:'bold', marginBottom:14 }}>
                        Nome: {starship.name} |
                        Modelo: {starship.model} |
                        Passageiros: {starship.passengers} 
                    </Text>
                ))
            ) : (
                <Text>Nenhuma nave encontrada.</Text>
            )}
            </View>

        </View>
    )
}