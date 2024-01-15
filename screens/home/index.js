import React, { useState } from "react";
import {
 Text,
 View,
 SafeAreaView,
 StyleSheet,
 Image,
 Button,
 Alert,
 TouchableOpacity,
 ScrollView,
} from "react-native";

const Home = () => {
 const data = [
  {
   id: 1,
   subheading1: "lorem ipsum",
   subheading2: "Web Design Project",
   img: require("../../assets/images/porto1.png"),
  },
  {
   id: 2,
   subheading1: "lorem ipsum",
   subheading2: "Web Design Project",
   img: require("../../assets/images/porto2.png"),
  },
 ];

 return (
  <ScrollView>
   <View style={styles.container}>
    <Image
     style={styles.avatar}
     source={require("../../assets/images/henrycavill.jpeg")}
    />
    <Text style={styles.heading1}>Jabriel Bamasena Javier Rahardjanto</Text>
    <Text style={styles.paragraph}>
     Hello, my name is Jabriel Bamasena. Currently, I am studying at Telkom
     Purwokerto Vocational High School majoring in Software Engineering. I
     specialize in creating Android applications with React Native. Throughout
     my school years, I have actively participated in and won various
     competitions. You can also view my portfolio below.
    </Text>
    <Button
     title='See More'
     style={styles.button}
     color='#0142A2'
    />
    <Text style={styles.heading2}>My Recents Project</Text>
    {data.map((item) => {
     return (
      <View>
       <View style={styles.projectContainer}>
        <Image
         style={styles.projectImg}
         source={item.img}
        />
        <View style={styles.descContainer}>
         <View style={styles.textContainer}>
          <Text style={styles.subHeading1}>{item.subheading1}</Text>
          <Text style={styles.subHeading2}>{item.subheading2}</Text>
         </View>
         <TouchableOpacity style={styles.buttonContainer}>
          <Image
           style={styles.icon}
           source={require("../../assets/icons/arrow.png")}
          />
         </TouchableOpacity>
        </View>
       </View>
      </View>
     );
    })}
   </View>
  </ScrollView>
 );
};

export default Home;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "#ecf0f1",
  paddingTop: 50,
  padding: 30,
 },
 projectContainer: {
  flex: 1,
  padding: 12,
 },
 descContainer: {
  flex: 1,
  maxHeight: 70,
  // maxWidth: 100,
  flexDirection: "row",
  justifyContent: "space-between",
 },
 textContainer: {
  flex: 1,
  maxHeight: 120,
  maxWidth: 220,
 },
 buttonContainer: {
  justifyContent: "center",
  backgroundColor: "#3498db",
  marginTop: 10,
  padding: 15,
  maxHeight: 40,
  maxWidth: 40,
  borderRadius: 200,
 },
 heading1: {
  color: "black",
  textAlign: "center",
  fontWeight: "bold",
  justifyContent: "center",
  marginTop: 10,
  fontSize: 24,
 },
 heading2: {
  color: "black",
  textAlign: "center",
  fontWeight: "bold",
  justifyContent: "center",
  fontSize: 24,
  paddingTop: 30,
 },
 subHeading1: {
  color: "black",
  textAlign: "left",
  fontWeight: "bold",
  justifyContent: "center",
  fontSize: 16,
  paddingTop: 10,
 },
 subHeading2: {
  color: "black",
  textAlign: "left",
  fontWeight: "semibold",
  justifyContent: "center",
  fontSize: 16,
 },
 paragraph: {
  color: "black",
  textAlign: "center",
  marginTop: 10,
  marginBottom: 20,
  fontSize: 16,
  color: "grey",
  justifyContent: "center",
 },
 avatar: {
  width: 200,
  height: 200,
  alignSelf: "center",
  marginBottom: 10,
  borderRadius: 10,
 },
 button: {
  borderRadius: 10,
 },
 projectImg: {
  width: 300,
  height: 160,
  alignSelf: "center",
  borderRadius: 10,
 },
 icon: {
  alignSelf: "center",
  width: 30,
  height: 30,
  tintColor: "white",
 },
});
