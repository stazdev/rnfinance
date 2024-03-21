import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Utils/Colors";

const ProfileItem = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 10,
  },
  value: {
    fontSize: 12,
    color: Colors.primary,
  },
});

export default ProfileItem;
