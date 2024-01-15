import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Button,
 ScrollView,
 TouchableOpacity,
 Image,
} from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 // const handleLogin = () => {
 //  // Logic login tapi belum sempet bu hehe
 // };

 return (
  <ScrollView>
   <View style={styles.container}>
    <View style={styles.logo}>
     <Image
      style={styles.logoImg}
      source={require("../../assets/icons/logo.png")}
     />
    </View>
    <View style={styles.headerContainer}>
     <Text style={styles.mainHeading}>Hello,</Text>
     <Text style={styles.subHeading}>Masuk untuk melanjutkan yahh</Text>
    </View>

    <View style={styles.formContainer}>
     <TextInput
      style={styles.input}
      onChangeText={setUsername}
      value={username}
      placeholder='Username'
     />
     <TextInput
      style={styles.input}
      onChangeText={setPassword}
      value={password}
      placeholder='Password'
      secureTextEntry={true}
     />
    </View>

    <TouchableOpacity style={styles.forgotpass}>
     <Text style={styles.disableText}>Lupa Password?</Text>
    </TouchableOpacity>
   </View>

   <View style={styles.buttonContainer}>
    <TouchableOpacity
     style={styles.buttonMain}
     onPress={() => {
      navigation.navigate("Home");
     }}>
     <Text style={{ fontSize: 16, fontWeight: 500, color: "white" }}>
      Masuk
     </Text>
    </TouchableOpacity>

    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 32 }}>
     <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
     <View>
      <Text style={{ width: 50, textAlign: "center", color: "grey" }}>
       Atau
      </Text>
     </View>
     <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
    </View>
    <TouchableOpacity style={styles.buttonSecondary}>
     <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>
      Google
     </Text>
    </TouchableOpacity>
   </View>

   <View
    style={{
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     marginTop: 16,
    }}>
    <Text style={{ fontSize: 13, paddingRight: 2 }}>Belum Punya Akun?</Text>
    <TouchableOpacity
     onPress={() => {
      navigation.navigate("Register");
     }}>
     <Text style={{ fontSize: 14, fontWeight: 600, color: "#638CCE" }}>
      Daftar sekarang
     </Text>
    </TouchableOpacity>
   </View>
  </ScrollView>
 );
};

export default Login;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 24,
 },
 logo: {
  flex: 1,
  width: 60,
  height: 60,
  backgroundColor: "#FE5B6E",
  borderRadius: 10,
  justifyContent: "center",
 },
 logoImg: {
  height: 45,
  width: 45,
  resizeMode: "contain",
  alignSelf: "center",
  justifyContent: "center",
 },
 headerContainer: {
  marginVertical: 24,
 },
 mainHeading: {
  color: "black",
  fontWeight: "bold",
  justifyContent: "center",
  fontSize: 28,
 },
 subHeading: {
  color: "black",
  fontWeight: "light",
  fontSize: 14,
  marginTop: 10,
 },
 formContainer: {
  flex: 1,
  marginTop: 16,
 },
 input: {
  height: 55,
  color: "grey",
  borderWidth: 1,
  borderRadius: 15,
  marginVertical: 12,
  paddingLeft: 30,
  borderColor: "grey",
 },
 forgotpass: {
  fontWeight: "light",
  color: "grey",
  alignSelf: "flex-end",
 },
 disableText: {
  fontWeight: "light",
  color: "grey",
  fontSize: 12,
 },
 buttonContainer: {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 16,
 },
 buttonMain: {
  height: 55,
  width: 350,
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 16,
  borderRadius: 10,
  backgroundColor: "#3B95FF",
 },
 buttonSecondary: {
  height: 55,
  width: 350,
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 10,
  backgroundColor: "#F4F9FF",
  marginTop: 32,
  borderWidth: 0.5,
  borderColor: "grey",
 },
});
