import { StyleSheet, Text, View } from 'react-native';
import Cartao from './src/components/Cartao';

const listaRpg = [
  {
    titulo: "ELDEN RING",
    ataque: "7",
    defesa: "10",
    url: "data:image/jpeg;base64,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"
  },
  {
    titulo: "THE WITCHER 3",
    ataque: "6",
    defesa: "9",
    url: "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png"
  },
  {
    titulo: "MASS EFFECT 2",
    ataque: "9",
    defesa: "4",
    url: "https://upload.wikimedia.org/wikipedia/pt/0/05/MassEffect2_cover.PNG"
  },
  {
    titulo: "DRAGON AGE",
    ataque: "10",
    defesa: "8",
    url: "https://m.media-amazon.com/images/I/91cSuQjNMfL.jpg"
  }
]

export default function App() {
  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>RPG Trocas</Text>
      </View>
      {listaRpg.map(rpg => <Cartao rpg={rpg}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: '25px',
    fontWeight: 'bold'
  }
});
