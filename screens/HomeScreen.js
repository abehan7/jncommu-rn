import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import BoardCard from "../components/BoardCard";

const data = {
  FreeBoard: {
    name: "자유게시판",
    contents: [
      { id: 123, title: "제목1", content: "내용1" },
      { id: 1234, title: "제목1", content: "내용2" },
      { id: 1235, title: "제목1", content: "내용3" },
      { id: 1236, title: "제목1", content: "내용4" },
      { id: 1237, title: "제목1", content: "내용5" },
    ],
  },
  InfoBoard: {
    name: "유용한정보들",
    contents: [
      { id: 123, title: "제목1", content: "내용1" },
      { id: 1234, title: "제목1", content: "내용2" },
      { id: 1235, title: "제목1", content: "내용3" },
      { id: 1236, title: "제목1", content: "내용4" },
      { id: 1237, title: "제목1", content: "내용5" },
    ],
  },
  HotBoard: {
    name: "인기게시글",
    contents: [
      { id: 123, title: "제목1", content: "내용1" },
      { id: 1234, title: "제목1", content: "내용2" },
      { id: 1235, title: "제목1", content: "내용3" },
      { id: 1236, title: "제목1", content: "내용4" },
      { id: 1237, title: "제목1", content: "내용5" },
    ],
  },
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full bg-red-300`}>
      <View style={tw`bg-white flex-1 `}>
        <View style={tw`flex-1`}>
          <BoardCard data={data.FreeBoard} />
        </View>
        <View style={tw`flex-1`}>
          <BoardCard data={data.InfoBoard} />
        </View>
        <View style={tw`flex-1`}>
          <BoardCard data={data.HotBoard} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
