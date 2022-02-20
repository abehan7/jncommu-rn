import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const BoardCard = ({ data }) => {
  //   console.log(data.contents[0]);
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View
        style={tw`border bg-white h-5/6 w-5/6 border-gray-300 rounded-lg shadow-md`}
      >
        <View style={tw`bg-pink-100 flex-row justify-between p-2`}>
          <Text>{data.name}</Text>
          <TouchableOpacity>
            <Text>더보기</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={tw`flex-1`}
          data={data.contents}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={tw`flex-1 bg-red-100`}>
              <Text>{item?.content}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default BoardCard;

const styles = StyleSheet.create({});
