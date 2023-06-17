import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { app, auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const db = app.firestore();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigation.navigate("Home");
        this.checkAccountStatus(user.uid, user.email);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          db.collection("users").doc(auth.user.uid).set({
            name: email,
          });
          navigation.navigate("Home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ padding: 16 }}>
      <View>
        <View>
          <TextInput
            placeholder="Email"
            style={{ padding: 12, backgroundColor: "#fff", marginBottom: 12 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            style={{ padding: 12, backgroundColor: "#fff", marginBottom: 12 }}
            value={password}
            onChangeText={(psswd) => setPassword(psswd)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              padding: 12,
              backgroundColor: "#45ff01",
              width: 120,
              alignItems: "center",
            }}
            onPress={register}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 12,
              backgroundColor: "#45ff01",
              width: 120,
              alignItems: "center",
            }}
            onPress={signIn}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
