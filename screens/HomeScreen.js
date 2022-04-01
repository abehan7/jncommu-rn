import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import BoardCard from "../components/BoardCard";
import { ScrollView } from "react-native";
import InfoCard from "../components/InfoCard";

const data = [
  {
    image: require("../assets/Image/food1.png"),
    title: "#1 밥집 후기 모음  ",
    url: "https://everytime.kr/375208/v/174335251",
  },
  {
    image: require("../assets/Image/test1.jpg"),
    title: "#2 시험 꿀팁  ",
    url: "https://everytime.kr/375208/v/179246708",
  },
  {
    image: require("../assets/Image/healing.jpg"),
    title: "#3 힐링  ",
    url: "https://everytime.kr/409819/v/243196350",
  },
  {
    image: require("../assets/Image/homework.jpg"),
    title: "#4 조별과제 꿀팁  ",
    url: "https://everytime.kr/375208/v/243378622",
  },
  {
    image: require("../assets/Image/paper.jpg"),
    title: "#5 논문 꿀팁  ",
    url: "https://everytime.kr/375210/v/229871745",
  },
  {
    image: require("../assets/Image/library.jpg"),
    title: "#6 도서관 꿀팁  ",
    url: "https://everytime.kr/375208/v/186604182",
  },
  {
    image: require("../assets/Image/religous2.jpg"),
    title: "#7 신천지 조심",
    url: "https://everytime.kr/375208/v/178473882",
  },
  {
    image: require("../assets/Image/newbie.jpeg"),
    title: "#8 새내기 꿀팁",
    url: "https://everytime.kr/375210/v/163657760",
  },
  {
    image: require("../assets/Image/darkHistory.jpg"),
    title: "#9 전대 흑역사",
    url: "https://everytime.kr/375208/v/164280645",
  },
  {
    image: require("../assets/Image/photo.jpg"),
    title: "#10 고마운 분",
    url: "",
  },
];

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
            전남대 에타 요약
          </Text>
        </View>
        <View style={tw`bg-white flex-1 m-4 flex`}>
          {data.map((item, index) => (
            <InfoCard
              key={index}
              image={item.image}
              title={item.title}
              url={item.url}
            />
          ))}
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
