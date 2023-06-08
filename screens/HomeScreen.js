import { Text, View } from "react-native";
import React, { Component, useLayoutEffect } from "react";
import TitleBar from "../components/TitleBar";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <TitleBar />
      <TaskList />
      <Navbar />
    </View>
  );
}
