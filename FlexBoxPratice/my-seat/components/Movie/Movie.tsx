import { useState } from "react";
import { FlatList } from "react-native";
import Seat from "./Seat";

const Movie = () => {
  const [seats] = useState<number[]>(
    Array.from({ length: 40 }, (_, i) => i + 1)
  );
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSelect = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <FlatList
      data={seats}
      keyExtractor={(item) => item.toString()}
      numColumns={5}
      renderItem={({ item }) => (
        <Seat
          seatNumber={item}
          isSelected={selectedSeats.includes(item)}
          onSelect={() => handleSelect(item)}
        />
      )}
    />
  );
};
export default Movie;
