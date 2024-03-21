import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../Utils/Colors";

const SearchInput = ({ placeholder, iconColor, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Icon name="search" size={20} color={iconColor} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={"Search"}
        placeholderTextColor={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
  },
});

export default SearchInput;
