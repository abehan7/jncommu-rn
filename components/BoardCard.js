import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const renderItem = (item, onPressWriting) => {
  const onPress = () => {
    onPressWriting(item);
  };
  return (
    <TouchableHighlight
      style={tw`px-3 py-2`}
      underlayColor="#e9ecef"
      key={item.id}
      onPress={onPress}
    >
      <Text>{item?.content}</Text>
    </TouchableHighlight>
  );
};

const BoardCard = ({ data }) => {
  const navigation = useNavigation();
  const onPressWriting = (writing) => {
    navigation.navigate("WritingScreen", {
      id: writing.id,
      title: writing.title,
      content: writing.content,
    });
  };
  return (
    <View style={tw`h-64 items-center justify-center`}>
      <View
        style={[
          tw`border bg-white border-gray-50 rounded-lg shadow-sm`,
          {
            height: "95%",
            width: "95%",
          },
        ]}
      >
        <View style={tw`flex-row justify-between p-3 pt-6`}>
          <Text style={tw`font-bold text-base`}>{data?.name}</Text>
          <TouchableOpacity>
            <Text
              style={[
                tw`px-3 text-red-500`,
                {
                  color: "#84cc16",
                },
              ]}
              onPress={() => navigation.navigate(data?.screen)}
            >
              더보기
            </Text>
          </TouchableOpacity>
        </View>
        {data.contents.map((item) => renderItem(item, onPressWriting))}
      </View>
    </View>
  );
};

export default BoardCard;

const styles = StyleSheet.create({});
