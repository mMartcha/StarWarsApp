import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterView from "@/components/CharacterView";
import { router } from "expo-router";

export default function Character() {

   
    const [selectedCharacter, setSelectedCharacter] = useState();

    const images = [
        {
            id:'1',
            image: require('@/assets/images/lukesky.jpg'),
        },
        {
            id:'2',
            image: require('@/assets/images/obiwan.jpg'),
        },
        {
            id:'3',
            image: require('@/assets/images/darthvader.jpg'),
        },
        {
            id:'4',
            image: require('@/assets/images/r2d2.jpg'),
        },
        {
            id:'5',
            image: require('@/assets/images/c3po.jpg'),
        }
]


    

    function handleCharacterPress(character:any) {
        router.push({
            pathname: "/(tabs)/CharacterDetail/[id]",
            params: { id: character }
        });
        console.log(character)
        setSelectedCharacter(character);
    }
     

    return(
        <View style={styles.container}>
         
               <Text style={{fontSize:24, fontWeight:'bold', marginBottom:30}}>Escolha o personagem</Text>
                
                   <FlatList
                   ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                   horizontal
                   data={images}
                   showsHorizontalScrollIndicator={false}
                   renderItem={(item)=> (
                    
                       <CharacterView
                       onPress={() => handleCharacterPress(item.item.id)}
                        image={(item.item.image)} 
                        id={item.item.id}
                       />
                       
                    )}
                    />

        </View>
    )
}