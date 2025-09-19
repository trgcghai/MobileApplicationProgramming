import { Image } from "expo-image";
import { View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MoxNym0w9EwK8DZZFkzgYlcm1iVyrE7A-A&s",
        }}
        style={{ width: "100%", height: "100%", alignSelf: "center" }}
      />
    </View>
  );
}
