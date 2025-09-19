import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface Todo {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
}

const TodoList = () => {
  const [task, setTask] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const createNewTodo = async (newTask: Todo) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => console.log("Created:", data));
  };

  const deleteTodo = async (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("Deleted:", data));
  };

  const addTask = async () => {
    if (input.trim().length > 0) {
      const newTask = {
        id: Date.now(),
        completed: false,
        title: input.trim(),
        userId: 1,
      };

      await createNewTodo(newTask);
      setTask((prev) => [newTask, ...prev]);
      setInput("");
    }
  };

  const removeTask = async (id: number) => {
    await deleteTodo(id);
    setTask((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTask(data.filter((item: Todo) => item.id < 50).slice(0, 10));
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task"
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <Pressable style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View>
        {task.length === 0 && (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>No tasks yet</Text>
          </View>
        )}
        <FlatList
          data={task}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.title}</Text>
              <Pressable
                onPress={() => removeTask(item.id)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>X</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ccc",
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    color: "white",
    width: 200,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskItem: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "white",
    width: 300,
    borderRadius: 12,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    flex: 2,
    color: "#ccc",
    fontSize: 16,
    fontWeight: "medium",
  },
  removeButton: {
    padding: 12,
    backgroundColor: "red",
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
