import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Margin } from "../GlobalStyles";

const AkunScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.akunscreen}>
      <Image
        style={styles.akunscreenChild}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/102279-3.png")}
      />
      <Pressable
        style={[styles.pressable, styles.iconLayout, styles.icon2Position]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/1946436-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.hotel, styles.udbTypo]}>Hotel</Text>
      <Text style={[styles.udb, styles.udbTypo]}>UDB</Text>
      <Image
        style={[styles.icon2, styles.icon2Position, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/2838838-1.png")}
      />
      <Image
        style={[styles.profileUser1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/profileuser-1.png")}
      />
      <View
        style={[
          styles.akunscreenItem,
          styles.akunscreenLayout,
          styles.akunscreenItemLayout,
        ]}
      />
      <Text style={[styles.lokasiKrambilanContainer, styles.containerTypo]}>
        <Text style={styles.lokasi}>Lokasi :</Text>
        <Text style={styles.krambilan004005Malangjiwan}>
          Krambilan 004/005 Malangjiwan, Colomadu, KRA
        </Text>
      </Text>
      <View style={[styles.akunscreenInner, styles.akunscreenLayout]} />
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.akunscreenLayout,
          styles.akunscreenItemLayout,
        ]}
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Text style={styles.keluar}>KELUAR</Text>
      <Text style={[styles.nohandphone0895Container, styles.containerTypo]}>
        <Text style={styles.lokasi}>No.Handphone :</Text>
        <Text style={styles.krambilan004005Malangjiwan}>0895 3264 32299</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Text style={[styles.faris190103101, styles.udbTypo]}>
        Faris 190103101
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 31,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    position: "absolute",
  },
  icon2Position: {
    top: 796,
    width: 30,
  },
  udbTypo: {
    textAlign: "left",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  akunscreenLayout: {
    height: 45,
    width: 235,
    backgroundColor: Color.teal,
    position: "absolute",
  },
  akunscreenItemLayout: {
    left: 96,
    height: 45,
    width: 235,
    backgroundColor: Color.teal,
  },
  containerTypo: {
    height: 34,
    width: 302,
    fontSize: FontSize.size_2xs,
    color: Color.white,
    fontFamily: FontFamily.itim,
    textAlign: "left",
    position: "absolute",
  },
  akunscreenChild: {
    top: 776,
    left: 0,
    width: 428,
    height: 70,
    position: "absolute",
  },
  icon: {
    top: 795,
    left: 154,
    width: 30,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 66,
  },
  image1Icon: {
    left: 143,
    width: 35,
    top: 49,
  },
  hotel: {
    top: 45,
    left: 226,
    fontFamily: FontFamily.kaushanScript,
    color: Color.red_100,
    width: 67,
    height: 56,
  },
  udb: {
    left: 178,
    fontFamily: FontFamily.aBeeZee,
    color: Color.indigo_100,
    width: 64,
    height: 46,
    top: 49,
  },
  icon2: {
    left: 239,
  },
  profileUser1Icon: {
    top: 797,
    left: 324,
    width: 30,
  },
  akunscreenItem: {
    top: 369,
  },
  lokasi: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  krambilan004005Malangjiwan: {
    margin: Margin.m_md,
  },
  lokasiKrambilanContainer: {
    top: 380,
    left: 106,
  },
  akunscreenInner: {
    top: 465,
    left: 98,
  },
  rectanglePressable: {
    top: 648,
  },
  keluar: {
    top: 662,
    left: 183,
    fontSize: FontSize.size_sm,
    color: Color.white,
    fontFamily: FontFamily.itim,
    textAlign: "left",
    position: "absolute",
  },
  nohandphone0895Container: {
    top: 473,
    left: 114,
  },
  ellipseIcon: {
    top: 101,
    left: 115,
    width: 197,
    height: 196,
    position: "absolute",
  },
  faris190103101: {
    top: 319,
    left: 136,
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibre,
    color: Color.black,
  },
  akunscreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 846,
    overflow: "hidden",
    width: "100%",
  },
});

export default AkunScreen;
