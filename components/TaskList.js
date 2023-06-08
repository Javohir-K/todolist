import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskList = () => {
  const [data, setData] = useState([]);
  const firebaseData = app.firestore().collection("tasks");

  useEffect(() => {
    firebaseData.onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  function deleteDoc(docs) {
    firebaseData.doc(docs.id).delete();
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {data.map((item) => (
          <View style={styles.taskcard}>
            <View style={{ backgroundColor: "#55aaff", width: 8 }}></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
                paddingRight: 16,
              }}
            >
              <Text style={{ fontSize: 20, padding: 20 }} numberOfLines={1}>
                {item.data.name}
              </Text>
              <TouchableOpacity onPress={() => deleteDoc(item)}>
                <FontAwesomeIcon icon={faTrash} size={22} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  taskcard: {
    // alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 16,
    overflow: "hidden",
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#5551ff70",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.57,
    shadowRadius: 8.65,
    backgroundColor: "#fff",
    marginBottom: 20,
    elevation: 6,
  },

  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  scrollView: {
    marginTop: -30,
    flex: 1,
    // paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
  },
});

export default TaskList;
