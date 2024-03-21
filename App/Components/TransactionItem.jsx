import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../Utils/Colors";
import FormatNumber from "../Utils/FormatNumber";

const TransactionItem = ({
  category,
  title,
  date,
  amount,
  color,
  dateColor,
}) => {
  let backgroundColor = "#000";
  let icon = "shopping-bag";
  switch (category) {
    case "shopping":
      backgroundColor = "#2196F3";
      icon = "shopping-bag";
      break;
    case "medicine":
      backgroundColor = "#4CAF50";
      icon = "local-pharmacy";
      break;
    case "emergency":
      backgroundColor = "#F44336";
      icon = "warning";
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor }]}>
        <Icon name={icon} size={30} color="#fff" />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: color }]}>{title}</Text>
        <Text style={[styles.date, { color: dateColor }]}>{date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.title, { color: color }]}>
          -{FormatNumber(amount)}
        </Text>
        <Icon name="chevron-right" size={30} color={Colors.grey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: Colors.grey,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default TransactionItem;
