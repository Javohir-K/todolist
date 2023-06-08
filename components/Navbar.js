import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faAdd, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <FontAwesomeIcon icon={faHome} size={24} color="#444" />
      </View>
      <View style={styles.button_wrapper}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Newtask")}
            style={styles.button_inner}
          >
            <FontAwesomeIcon icon={faAdd} size={40} color="#eee" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menu}>
        <FontAwesomeIcon icon={faUser} size={24} color="#444" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
  },
  button_wrapper: {
    position: "relative",
    alignItems: "center",
    flex: 1,
  },
  button: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#fff",
    padding: 12,
    top: -64,
    borderRadius: 50,
  },
  button_inner: {
    borderRadius: 50,
    backgroundColor: "#30A2FF",
    padding: 12,
  },
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navbar;
