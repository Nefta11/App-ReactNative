import { StyleSheet, Text, View,Alert, TouchableWithoutFeedback } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>Alert.alert('Hemos tocado el texto siuu')}>
      <Text>Hola Mundo Siuu</Text>
      <StatusBar style="auto" />
      </TouchableWithoutFeedback>
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
});
