import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("LoginScreen")}
    >
      <ImageBackground
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <Text style={[styles.udbHotel, styles.udbHotelTypo]}>UDB Hotel</Text>
      <Text
        style={[styles.universitasDutaBangsaContainer, styles.udbHotelTypo]}
      >
        <Text style={styles.universitasDutaBangsa}>
          Universitas Duta Bangsa
        </Text>
        <Text style={styles.surakarta}> Surakarta</Text>
      </Text>
      <Image
        style={styles.splashscreenChild}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.hotel}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={[styles.hotel1, styles.udb1Typo]}>Hotel</Text>
      </Pressable>
      <Pressable
        style={styles.udb}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={[styles.udb1, styles.udb1Typo]}>UDB</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  udbHotelTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  udb1Typo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
  },
  image1Icon: {
    top: 240,
    left: 92,
    width: 245,
    height: 206,
    position: "absolute",
  },
  udbHotel: {
    top: 527,
    left: 166,
    fontWeight: "700",
  },
  universitasDutaBangsa: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  surakarta: {
    margin: Margin.m_md,
  },
  universitasDutaBangsaContainer: {
    top: 563,
    left: 105,
    whiteSpace: "pre-wrap",
  },
  splashscreenChild: {
    top: 732,
    left: 0,
    width: 198,
    height: 178,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 264,
    top: 0,
    width: 266,
    height: 239,
    position: "absolute",
  },
  hotel1: {
    fontFamily: FontFamily.kaushanScript,
    color: Color.red_100,
  },
  hotel: {
    left: 211,
    top: 446,
    position: "absolute",
  },
  udb1: {
    fontFamily: FontFamily.aBeeZee,
    color: Color.indigo_100,
  },
  udb: {
    left: 148,
    top: 450,
    position: "absolute",
  },
  splashscreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 854,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splashscreen;
