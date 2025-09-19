import { Pressable, StyleSheet, Text, View } from "react-native";

interface CalButtonProps {
  value: string;
  onPress: () => void;
}

const CalButton = ({ value, onPress }: CalButtonProps) => {
  return (
    <View
      style={[
        styles.seatContainer,
        {
          justifyContent: value === "=" ? "flex-start" : "center",
        },
      ]}
    >
      <Pressable
        style={[
          styles.seatCard,
          ...(value === "=" ? [{ maxHeight: 100 }] : []),
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.seatNumber}>{value}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CalButton;

const styles = StyleSheet.create({
  seatContainer: {
    flex: 1,
    marginBlock: 8,
    marginHorizontal: 4,
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  seatCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "gray",
    borderRadius: 12,
  },
  seatNumber: {
    fontSize: 28,
    color: "#fff",
  },
});
