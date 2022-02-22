import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { ListItem } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";

const data = [
  {
    id: 123,
    title: "자연과 기술",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 1234,
    title: "해수돈구이 계산",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 1235,
    title: "띵지",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 1236,
    title: "눈물 장전",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 14236237,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 1221337,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 12374,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 12372,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 12371,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 123733,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 123744,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 123755,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 12237,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 113237,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
  {
    id: 123437,
    title: "해수돈구이",
    content: "내용123123123123123나미ㅓㅇㄹㄴㅇㅁ러123123dafsldfaslfdsauhil",
    timestamp: "2020-05-05",
  },
];

const FreeBoard = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full p-2`}>
      <Text style={tw`pl-3 py-2`}>자유게시판</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CustomListItem
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FreeBoard;
