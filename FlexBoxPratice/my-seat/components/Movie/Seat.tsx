import { Pressable, StyleSheet, Text, View } from "react-native";

interface SeatProps {
  seatNumber: number;
  isSelected: boolean;
  onSelect: (seatNumber: number) => void;
}

const Seat = ({ seatNumber, isSelected, onSelect }: SeatProps) => {
  return (
    <View style={styles.seatContainer}>
      <Pressable
        style={[
          styles.seatCard,
          { backgroundColor: isSelected ? "red" : "green" },
        ]}
        onPress={() => onSelect(seatNumber)}
      >
        <View>
          <Text style={[styles.seatNumber]}>{seatNumber}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Seat;

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
    borderRadius: 12,
  },
  seatNumber: {
    fontSize: 16,
    color: "#fff",
  },
});
