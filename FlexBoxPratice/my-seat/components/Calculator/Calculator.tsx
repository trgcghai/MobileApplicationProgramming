import { FlatList, StyleSheet, Text, View } from "react-native";
import CalButton from "./CalButton";
import { useState } from "react";

const Calculator = () => {
  const buttons = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "+",
    "-",
    "*",
    "/",
    "Del",
    "Del all",
    "=",
  ];

  const [display, setDisplay] = useState<string>("0");

  const handlePress = (value: string) => {
    const lastChar = display[display.length - 1];

    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(value))) {
      if (["+", "-", "*", "/"].includes(lastChar)) {
        setDisplay((prev) => prev + value);
      } else {
        setDisplay((prev) => (prev === "0" ? value : prev + value));
      }
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (["+", "-", "*", "/"].includes(lastChar)) {
        setDisplay((prev) => prev.slice(0, -1) + value);
      } else {
        setDisplay((prev) => prev + value);
      }
    }

    if (value === "Del") {
      if (display.length === 1) {
        setDisplay("0");
      } else {
        setDisplay((prev) => prev.slice(0, -1));
      }
    }

    if (value === "Del all") {
      setDisplay("0");
    }

    if (value === "=") {
      if (["+", "-", "*", "/"].includes(lastChar)) {
        setDisplay("Error");
      } else {
        const number = display.split(/(\+|\-|\*|\/)/g).map((item) => {
          if (["+", "-", "*", "/"].includes(item)) {
            return item;
          } else {
            return Number(item);
          }
        });
        let result = number[0] as number;
        for (let i = 1; i < number.length; i += 2) {
          const operator = number[i];
          const nextNumber = number[i + 1] as number;
          if (operator === "+") {
            result += nextNumber;
          } else if (operator === "-") {
            result -= nextNumber;
          } else if (operator === "*") {
            result *= nextNumber;
          } else if (operator === "/") {
            result /= nextNumber;
          }
        }
        setDisplay(result.toFixed(2).toString());
      }
    }
  };

  return (
    <>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{display}</Text>
      </View>
      <FlatList
        data={buttons}
        keyExtractor={(item) => item.toString()}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <CalButton
              value={item.toString()}
              onPress={() => handlePress(item.toString())}
            />
          );
        }}
      />
    </>
  );
};
export default Calculator;

const styles = StyleSheet.create({
  resultContainer: {
    marginBottom: 16,
  },
  resultText: {
    fontSize: 40,
    fontWeight: "semibold",
    textAlign: "right",
    color: "white",
  },
});
