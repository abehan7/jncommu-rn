import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import BoardCard from "../components/BoardCard";
import { ScrollView } from "react-native";

const data = {
  FreeBoard: {
    name: "자유게시판",
    contents: [
      { id: 123, title: "제목1", content: "자연과 기술 질문" },
      { id: 1234, title: "제목1", content: "해수돈구이 계산" },
      { id: 1235, title: "제목1", content: "띵지" },
      { id: 1236, title: "제목1", content: "눈물 장전" },
      { id: 1237, title: "제목1", content: "전남대가 낮은게 아닙니다" },
    ],
  },
  InfoBoard: {
    name: "유용한 정보들",
    contents: [
      { id: 123, title: "제목1", content: "내용1" },
      { id: 1234, title: "제목1", content: "내용2" },
      { id: 1235, title: "제목1", content: "내용3" },
      { id: 1236, title: "제목1", content: "내용4" },
      { id: 1237, title: "제목1", content: "내용5" },
    ],
  },
  HotBoard: {
    name: "실시간 인기 글",
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
    <SafeAreaView style={tw`bg-white h-full bg-white`}>
      <ScrollView
        style={styles.scrollView}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={tw`p-3 bg-white shadow`}>
          <Text
            style={[
              tw`font-bold text-lg`,
              {
                color: "#84cc16",
              },
            ]}
          >
            JNC
          </Text>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: "white",
  },

  text: {
    fontSize: 42,
  },
});

export default HomeScreen;
