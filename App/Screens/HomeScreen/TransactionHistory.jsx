import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../Utils/Colors";
import FormatNumber from "../../Utils/FormatNumber";
import SearchInput from "../../Components/SearchInput";
import { FlatList } from "react-native-gesture-handler";
import TransactionItem from "../../Components/TransactionItem";

const TransactionHistory = () => {
  const route = useRoute();
  const { data } = route.params;

  const totalExpenses = data.reduce((acc, item) => acc + item.amount, 0);

  return (
    <View>
      <View style={styles.blueBackground}>
        <Header text={"Transactions"} iconColor={"#fff"} />

        <View style={styles.total_transaction}>
          <Text
            style={{ fontSize: 20, color: Colors.grey_light, marginBottom: 10 }}
          >
            Your total expenses
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            {FormatNumber(totalExpenses)}
          </Text>
        </View>
      </View>
      <View style={styles.bottom_section}>
        <SearchInput backgroundColor={"#083D77"} iconColor={Colors.primary} />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TransactionItem
              category={item.category}
              title={item.title}
              date={item.date}
              amount={item.amount}
              color={"white"}
              dateColor={Colors.grey_light}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomColor: "lime",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.3,
    padding: 24,
  },
  total_transaction: {
    alignItems: "center",
    marginTop: 80,
  },
  bottom_section: {
    marginTop: 50,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: Colors.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 24,
  },
});
export default TransactionHistory;
