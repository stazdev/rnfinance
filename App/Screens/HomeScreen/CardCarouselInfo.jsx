import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import Colors from "../../Utils/Colors";
import FormatNumber from "../../Utils/FormatNumber";
import FormatCreditCardNumber from "../../Utils/FormatCreditCard";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.7;

function CardCarouselInfo({ index, scrollX, item }) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(scrollX, inputRange, [0.8, 1, 0.8], "clamp");

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    "clamp"
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginHorizontal: 10,
        },
      ]}
    >
      <View>
        <Text style={styles.card_amount}>{FormatNumber(item.amount)}</Text>
        <Text style={styles.card_title}>{item.title}</Text>
      </View>
      <View>
        <Text style={styles.card_date}>{item.date}</Text>
        <Text style={styles.card_date}>
          {FormatCreditCardNumber(item.card_number)}
        </Text>
      </View>
    </Animated.View>
  );
}

export default CardCarouselInfo;
const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: CARD_LENGTH,
    height: 250,
    overflow: "hidden",
    padding: 24,
    borderRadius: 30,
    backgroundColor: "#F27405",
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
  },
  card_amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  card_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  card_date: {
    fontSize: 16,
    fontWeight: "100",
    color: "white",
  },
});
