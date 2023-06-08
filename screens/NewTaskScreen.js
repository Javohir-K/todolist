import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { app } from "../firebase";

export default function NewTaskScreen() {
  const navigation = useNavigation();
  let database = app.firestore().collection("tasks");
  const [taskName, setTaskName] = useState("");
  const [alert, setAlert] = useState("");
  const handleAdd = (e) => {
    if (taskName.length !== 0) {
      e.preventDefault();
      database.add({ name: taskName });
      navigation.navigate("Home");

    }
    else setAlert("Please write the task name!")
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_wrapper}>
        <TextInput
          onChangeText={(text) => setTaskName(text)}
          value={taskName}
          placeholder="What do you want to do?"
          style={styles.input}
        />
      </View>
      <View>
        <Text>Priority:</Text>
        <View>
          <View>
            <Text style={{ color: "red" }}>Low</Text>
          </View>
          <View>
            <Text style={{ color: "yellow" }}>Medium</Text>
          </View>
          <View>
            <Text style={{ color: "blue" }}>High</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text>Add task</Text>
        </TouchableOpacity>
      </View>
      <Text>{alert}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    padding: 12,
    fontSize: 20,
    borderRadius: 6,
    backgroundColor: "#9AC5F4",
  },
  button: {
    width: 100,
    padding: 12,
    backgroundColor: "aqua",
  },
});
