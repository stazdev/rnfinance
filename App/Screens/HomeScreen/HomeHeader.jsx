import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Icon name="menu" type="material" color="#fff" />
      <Avatar
        rounded
        source={{
          uri: "https://your-image-url.com",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

export default HomeHeader;
