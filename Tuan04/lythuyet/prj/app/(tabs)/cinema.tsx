import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Cinema = () => {
  const numberSeat = 20;
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleChoseSeat = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <View style={{ alignItems: "center", padding: 20, gap: 20 }}>
      <Text>Cinema Screen</Text>
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", width: 300, gap: 10 }}
      >
        {Array.from({ length: numberSeat }, (_, i) => i + 1).map((seat) => (
          <Seat
            key={seat}
            label={String(seat)}
            isSelected={selectedSeats.includes(seat)}
            onPress={() => handleChoseSeat(seat)}
          />
        ))}
      </View>
    </View>
  );
};
export default Cinema;

interface SeatProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const Seat = ({ label, isSelected, onPress }: SeatProps) => {
  return (
    <Pressable onPress={onPress} style={{ borderRadius: 8, width: "20%" }}>
      <Text
        style={{
          padding: 10,
          backgroundColor: isSelected ? "green" : "gray",
          margin: 5,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
