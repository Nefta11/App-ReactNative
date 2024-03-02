import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, StatusBar } from 'react-native';


//comando para iniciar un proyecto en react native: npx create-expo-app "nombre del proyecto"
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Hemos tocado el texto siuu')}>
        <Text>Hola Mundo Desde React Native siuu</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d29bfd ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontSize:30,
    color:'red',
    backgroundColor: 'red'
  }
});
