import { Image, ImageSourcePropType, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type CharacterViewProps =  PressableProps & {
    image?: ImageSourcePropType;
}

export default function CharacterView({image, onPress}: CharacterViewProps) {



    return(
        <Pressable style={styles.container} onPress={onPress}>
         
            <Image
                source={image}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    resizeMode: 'cover',
                }}
            />
        </Pressable>
    )
}