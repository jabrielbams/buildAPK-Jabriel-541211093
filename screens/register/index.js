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
import React, { useEffect, useState } from "react";

const Register = ({ navigation }) => {
 const [fullname, setFullName] = useState("");
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [isFormValid, setIsFormValid] = useState("");

 useEffect(() => {
  if (
   fullname != "" &&
   username != "" &&
   password != "" &&
   password === confirmPassword
  ) {
   setIsFormValid(true);
  } else {
   setIsFormValid(false);
  }
 }, [fullname, username, password, confirmPassword]);

 const handleRegister = () => {
  if (isFormValid) {
   navigation.navigate("Login");
  }
 };
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
     <Text style={styles.subHeading}>Daftar untuk melanjutkan yahh</Text>
    </View>

    <View style={styles.formContainer}>
     <TextInput
      style={styles.input}
      onChangeText={setFullName}
      value={fullname}
      placeholder='Nama Lengkap'
     />
     <TextInput
      style={styles.input}
      onChangeText={setUsername}
      value={username}
      placeholder='Username/Email'
     />

     <TextInput
      style={styles.input}
      onChangeText={setPassword}
      value={password}
      placeholder='Password'
      secureTextEntry={true}
     />

     <TextInput
      style={styles.input}
      onChangeText={setConfirmPassword}
      value={confirmPassword}
      placeholder='Ulang Password'
      secureTextEntry={true}
     />
    </View>
   </View>

   <View style={styles.buttonContainer}>
    <TouchableOpacity
     style={styles.buttonMain}
     onPress={handleRegister()}>
     <Text style={{ fontSize: 16, fontWeight: 500, color: "white" }}>
      Masuk 
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
    <Text style={{ fontSize: 13, paddingRight: 2 }}>Sudah Punya Akun?</Text>
    <TouchableOpacity>
     <Text style={{ fontSize: 14, fontWeight: 600, color: "#638CCE" }}>
      Masuk
     </Text>
    </TouchableOpacity>
   </View>
  </ScrollView>
 );
};

export default Register;

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
