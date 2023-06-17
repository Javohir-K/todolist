import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/bg.png";
import { app, auth } from "../firebase";

const TitleBar = () => {
  const [userName, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const auth = app.auth()
  


  app.auth().onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate().toString();
  let abr;
  if (day.endsWith("1")) {
    abr = "st";
  }
  if (day.endsWith("2")) {
    abr = "nd";
  }
  if (day.endsWith("3")) {
    abr = "rd";
  } else abr = "th";

  return (
    <View style={styles.titlebar_wrap}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <View style={styles.titlebar_input_wrap}>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#ffffff" />
            <TextInput
              style={styles.titlebar_input}
              placeholder="Search"
              placeholderTextColor={"#ffffff"}
            />
          </View>
          <Text style={styles.titlebar_text}>Good Morning, {userName} </Text>
          <Text style={styles.titlebar_time}>
            {date.getDate()}
            {abr} {month}, {date.getFullYear()}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  titlebar_wrap: {
    height: 250,
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
  },

  titlebar_input: {
    flex: 1,
    color: "#ffffff",
  },
  titlebar_text: {
    color: "#FFFFFF",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  },
  titlebar_input_wrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF50",
  },
  titlebar_time: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default TitleBar;
