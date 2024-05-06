import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "./HomeHeader";
import { Icon } from "react-native-elements";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { BarChart } from "react-native-chart-kit";

const Home = () => {
  const navigation = useNavigation();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <HomeHeader />
        <Text style={styles.greeting}>Good morning{"\n"}Emma,</Text>
      </View>
      <View style={styles.card}>
        <View>
          <View style={styles.card_head}>
            <Text
              style={{ fontSize: 16, color: Colors.grey, fontWeight: "700" }}
            >
              Your Total Balance
            </Text>
            <Icon name="more-horiz" type="material" color="#000" />
          </View>
          <Text
            style={{ fontSize: 24, color: Colors.primary, fontWeight: "900" }}
          >
            $8500.00
          </Text>
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            style={{ marginTop: 20 }}
            data={data}
            width={Dimensions.get("window").width * 0.75}
            height={200}
            yAxisSuffix="k"
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              barPercentage: 0.4,
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              xAxis: {
                visible: false, // Hide x-axis
              },
              yAxis: {
                visible: false, // Hide y-axis
              },
            }}
            fromZero={true}
            withInnerLines={false}
            withOuterLines={false}
            showBarTops={false}
            hideLegend={true}
            showValuesOnTopOfBars={false}
            barWidth={30}
          />
        </View>
      </View>
      <View style={styles.check_balance_card}>
        <View style={styles.card_head}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.grey_light,
              fontWeight: "700",
            }}
          >
            Check your {"\n"}bank accounts
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("cards");
            }}
          >
            <Icon name="chevron-right" type="material" color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBackground: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: Dimensions.get("window").height * 0.3,
    padding: 24,
  },
  card: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 40,
    marginTop: -50,
    padding: 24,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
  },
  check_balance_card: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: Colors.primary,
    borderRadius: 40,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 36,
  },
  card_head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "normal",
    paddingLeft: 36,
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default Home;
