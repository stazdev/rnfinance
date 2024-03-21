import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Header = ({ text, iconColor }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" type="material" color={iconColor} />
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
        {text}
      </Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
});

export default Header;
