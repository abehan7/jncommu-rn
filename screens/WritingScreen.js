import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const WritingScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
    });
  }, [navigation]);
  return (
    <View>
      <Text>this is the WritingScreen</Text>
      <Text>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
    </View>
  );
};

export default WritingScreen;
