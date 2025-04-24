import { Image, ImageSourcePropType, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type ButtonViewProps =  PressableProps & {
    text: string
    bordercolor?: string
}

export default function ({text,bordercolor ,onPress}: ButtonViewProps) {



    return(
        <Pressable style={[styles.container,{borderColor: bordercolor} ]} onPress={onPress}>
            <Text style={{fontSize:24, fontWeight:"bold"}}>{text}</Text>           
        </Pressable>
    )
}