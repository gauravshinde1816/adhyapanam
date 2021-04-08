import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TextInput, FAB, Title } from "react-native-paper";
import axios from "axios";
const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DateOfBirth, setDOB] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [ans1, setans1] = useState("");
  const [ans2, setans2] = useState("");

  const handleSubmit = async () => {
    const application = {
      name,
      email,
      university,
      college,
      DOB: DateOfBirth,
      ans1,
      ans2,
    };
    const res = await axios.post(
      "http://192.168.42.81:5000/apply",
      application
    );

    console.log(res.data);
    setCollege("");
    setDOB("");
    setEmail("");
    setName("");
    setUniversity("");
    setans1("");
    setans2("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        {/* <Title style={{ textAlign: "center" }}>Application Form</Title> */}
        <TextInput
          label="name"
          value={name}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          label="Email"
          value={email}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          label="Date of Birth"
          value={DateOfBirth}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(DOB) => setDOB(DOB)}
        />
        <TextInput
          label="college Name"
          value={college}
          underlineColor="black"
          style={styles.input}
          theme={{ colors: { primary: "green" } }}
          onChangeText={(college) => setCollege(college)}
        />
        <TextInput
          label="University Name"
          value={university}
          style={styles.input}
          underlineColor="black"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(university) => setUniversity(university)}
        />

        <TextInput
          label="What is your inspiration behind joining us? "
          value={ans1}
          underlineColor="black"
          style={styles.inputs}
          theme={{ colors: { primary: "green" } }}
          onChangeText={(ans1) => setans1(ans1)}
        />

        <TextInput
          label="Do you think Education can create 
          impact on society , how ?"
          value={ans2}
          underlineColor="black"
          style={styles.inputs}
          theme={{ colors: { primary: "green" } }}
          onChangeText={(ans2) => setans2(ans2)}
        />
        <FAB style={styles.fab} label="Submit" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputs: {
    height: 150,
  },
  input: {
    marginVertical: 10,
  },
  fab: {
    margin: 15,
  },
});
export default ApplicationForm;
