import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ListItem } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const CustomListItem = ({ id, title, subtitle, content }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("WritingScreen", {
      id,
      title,
      content,
    });
  };
  return (
    <TouchableOpacity
      style={tw`p-1 border-b border-gray-200`}
      onPress={onPress}
    >
      <View bottomDivider style={tw`p-1`}>
        <View>
          <Text style={tw`text-base p-0.5`}>{title}</Text>
        </View>
        <View style={tw`w-5/6`}>
          <Text numberOfLines={1} style={tw`text-sm p-0.5 text-gray-500`}>
            {content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomListItem;
