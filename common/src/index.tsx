import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style,
    )}
  />
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 80,
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
  text: {
    lineHeight: 24,
    fontSize: 20,
    marginVertical: 16,
    textAlign: 'center',
  },
  link: {
    color: '#1B95E0',
  },
});

export const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native for Web</Text>
      </View>
      <Text style={styles.text}>
        This is an example of an app built with{' '}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Button onPress={() => {}} title="Example button" />
    </SafeAreaView>
  );
};
