import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Header from "../../Components/Header";
import CardCarousel from "./CardCarousel";
import TitleHead from "../../Components/TitleHead";
import TransactionItem from "../../Components/TransactionItem";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Data = [
  {
    id: 1,
    category: "shopping",
    title: "Shopping",
    date: "Dec 21 2021, 8:30am",
    amount: 120,
  },
  {
    id: 2,
    category: "medicine",
    title: "Medicine",
    date: "Jun 12 2021, 8:30am",
    amount: 89,
  },
  {
    id: 3,
    category: "emergency",
    title: "Emergency",
    date: "Jun 12 2021, 8:30am",
    amount: 89,
  },
  {
    id: 4,
    category: "shopping",
    title: "Shopping",
    date: "Dec 21 2021, 8:30am",
    amount: 120,
  },
  {
    id: 5,
    category: "medicine",
    title: "Medicine",
    date: "Jun 12 2021, 8:30am",
    amount: 89,
  },
  {
    id: 6,
    category: "emergency",
    title: "Emergency",
    date: "Jun 12 2021, 8:30am",
    amount: 89,
  },
  {
    id: 7,
    category: "shopping",
    title: "Shopping",
    date: "Dec 21 2021, 8:30am",
    amount: 120,
  },
  {
    id: 8,
    category: "medicine",
    title: "Medicine",
    date: "Jun 12 2021, 8:30am",
    amount: 89,
  },
  {
    id: 9,
    category: "emergency",
    title: "Emergency",
    date: "Jun 12 2021, 8:30am",
    amount: 89,
  },
  {
    id: 10,
    category: "shopping",
    title: "Shopping",
    date: "Dec 21 2021, 8:30am",
    amount: 120,
  },
];

const WalletCards = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Header iconColor={"#fff"} />
        <Text style={styles.text}>You can check your{"\n"}cards here</Text>
      </View>
      <View style={{ marginTop: -50 }}>
        <CardCarousel />
      </View>
      <View style={styles.body}>
        <TitleHead
          showAll={true}
          text={"Recent Transactions"}
          onPress={() => {
            navigation.navigate("transaction_history", { data: Data });
          }}
        />

        <FlatList
          data={Data.slice(0, 3)}
          renderItem={({ item }) => (
            <TransactionItem
              category={item.category}
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default WalletCards;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBackground: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    height: Dimensions.get("window").height * 0.3,
    padding: 24,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
  },
  body: {
    padding: 24,
  },
});
