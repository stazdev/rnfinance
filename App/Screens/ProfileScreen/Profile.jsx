import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import ProfileItem from "../../Components/ProfileItem";
import { Icon } from "react-native-elements";

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.profile_title}>Profile</Text>
      <View style={styles.profile_details}>
        <View style={styles.profile_image} />
        <View>
          <Text style={styles.profile_name}>Emma Ashley</Text>
          <Text style={styles.profile_status}>Online</Text>
        </View>
      </View>
      <View style={{ gap: 20 }}>
        <ProfileItem label={"Username"} value={"emma-ashley"} />
        <ProfileItem label={"FirstName"} value={"Emma"} />
        <ProfileItem label={"LastName"} value={"Ashley"} />
        <ProfileItem label={"Date of Birth"} value={"03-03-1990"} />
      </View>

      <View style={styles.signout_btn}>
        <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
          Sign Out
        </Text>
        <Icon name="logout" type="material" color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  profile_title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 80,
  },
  profile_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  profile_details: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginVertical: 24,
    alignItems: "center",
  },
  profile_name: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  profile_status: {
    color: Colors.primary,
    fontSize: 16,
  },
  signout_btn: {
    marginVertical: 60,
    padding: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 25,
  },
});

export default Profile;
