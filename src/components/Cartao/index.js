import { Button, Image, Text, View } from "react-native-web";
import styles from "./style";

export default function Cartao(props){
    return (
        <View style={styles.cartao}>
            <View style={styles.descritivo}>
                <View>
                    <Image
                        style={styles.imagem}
                        source={{ uri: props.rpg.url }}>
                    </Image>
                </View>
                <View style={styles.textos}>
                    <Text style={styles.nomeItem}>
                        {props.rpg.titulo}
                    </Text>
                    <Text style={styles.poder}>
                        Ataque: {props.rpg.ataque}
                    </Text>
                    <Text style={styles.poder}>
                        Defesa: {props.rpg.defesa}
                    </Text>
                </View>
            </View>
            <View style={styles.botaoView}>
                <Button style={styles.botao} title={'Trocar'}></Button>
            </View>
        </View>
    )
}