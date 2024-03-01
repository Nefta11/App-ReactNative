import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Hemos tocado el texto siuu')}>
        <Text>Hola Mundo Desde React Native Siuu</Text>
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
});
