import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import CardCarouselInfo from "./CardCarouselInfo";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.7;
const SPACING = SRC_WIDTH * 0.02;

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);

  const DATA = [
    {
      id: "1",
      title: "Company",
      amount: 4500,
      date: "01/2022",
      card_number: 1234345678901234,
    },
    {
      id: "2",
      title: "Home",
      amount: 4200,
      date: "01/2022",
      card_number: 1234345678901234,
    },
    {
      id: "3",
      title: "Savings",
      amount: 4800,
      date: "03/2022",
      card_number: 1234345678901234,
    },
  ];

  return (
    <Animated.View>
      <Animated.FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 1.5}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"start"}
        data={DATA}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <CardCarouselInfo index={index} scrollX={scrollX} item={item} />
          );
        }}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </Animated.View>
  );
}
