import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import tw from "tailwind-react-native-classnames";
function InfoCard({ image, title, url }) {
  return (
    <TouchableOpacity
      style={tw`items-center justify-center rounded-xl p-3 m-2 `}
      onPress={() => Linking.openURL(url)}
    >
      <View style={tw`bg-red-200 rounded-xl overflow-hidden`}>
        <Image
          style={{ width: 300, height: 300, resizeMode: "contain" }}
          source={image}
        />
      </View>
      <View>
        <Text style={tw`text-lg`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default InfoCard;
