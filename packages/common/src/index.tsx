import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";

export const App = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 300,
        })
      ]),
    ).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              rotate: rotateValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "380deg"]
              })
            }
          ],
          height: 50,
          width: 50,
          margin: 5,
          borderWidth: 2,
          borderColor: "#888",
          borderBottomColor: "#8bffff",
          borderRadius: 50,
          justifyContent: "center"
        }}
      />
        <Text style={styles.text}>Fade</Text>
      <Animated.View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  }
});