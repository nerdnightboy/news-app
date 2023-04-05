
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Mynewscard from './component/newscard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 50, fontWeight: '800' }}>Nerdy News</Text>
      <View style={styles.allnewscontainer}>
          <Mynewscard/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black',

    marginTop: 25,
  },
  allnewscontainer: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
  },
});