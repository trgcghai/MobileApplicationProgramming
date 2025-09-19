import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const listColors = ["red", "blue", "green", "yellow", "purple"];
  const listDirections = ["column", "row", "row-reverse", "column-reverse"];
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [direction, setDirection] = useState<
    "column" | "row" | "row-reverse" | "column-reverse"
  >("column");

  return (
    <View style={[styles.container]}>
      <View>
        <Text>Current direction: {direction}</Text>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {listDirections.map((dir) => {
            return (
              <Text
                key={dir}
                onPress={() =>
                  setDirection(
                    dir as "column" | "row" | "row-reverse" | "column-reverse"
                  )
                }
                style={[
                  {
                    padding: 12,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "black",
                    borderStyle: "solid",
                    backgroundColor: direction === dir ? "lightblue" : "white",
                  },
                ]}
              >
                {dir.charAt(0).toUpperCase() + dir.slice(1)}
              </Text>
            );
          })}
        </View>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: direction,
          },
        ]}
      >
        <View
          style={[
            styles.viewItem,
            { flexGrow: 1, backgroundColor: listColors[index1] },
          ]}
        >
          <TouchableOpacity
            onPress={() => setIndex1((prev) => (prev + 1) % listColors.length)}
            style={styles.button}
          >
            <Text>Press me to change the color</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.viewItem,
            { flexGrow: 2, backgroundColor: listColors[index2] },
          ]}
        >
          <TouchableOpacity
            onPress={() => setIndex2((prev) => (prev + 1) % listColors.length)}
            style={styles.button}
          >
            <Text>Press me to change the color</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.viewItem,
            { flexGrow: 3, backgroundColor: listColors[index3] },
          ]}
        >
          <TouchableOpacity
            onPress={() => setIndex3((prev) => (prev + 1) % listColors.length)}
            style={styles.button}
          >
            <Text>Press me to change the color</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#effeff",
  },
  viewItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  button: {
    padding: 20,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
});
