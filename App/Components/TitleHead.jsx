import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const TitleHead = ({ text, showAll, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{text}</Text>
      {showAll && (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleHead;
