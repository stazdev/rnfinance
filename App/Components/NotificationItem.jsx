import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../Utils/Colors";
import { Icon } from "react-native-elements";

const NotificationItem = ({ senderImage, senderName, message }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: senderImage }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{senderName}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <Icon name="chevron-right" size={30} color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    color: Colors.primary,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default NotificationItem;
