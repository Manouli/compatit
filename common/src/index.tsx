import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 16,
    textAlign: 'center',
  },
});

export const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>Compatit</Text>
      </View>
      <Button onPress={() => {}} title="Example button" />
    </SafeAreaView>
  );
};
