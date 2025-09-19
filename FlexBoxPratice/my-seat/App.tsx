import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TodoList from "./components/Todolist/TodoList";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light"></StatusBar>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {/* <Movie /> */}
          {/* <Calculator /> */}
          <TodoList />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
