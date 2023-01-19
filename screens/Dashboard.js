import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Margin } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <Image
        style={[styles.dashboardChild, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47.png")}
      />
      <Image
        style={[styles.dashboardItem, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text
        style={[
          styles.rekomendasiHotel,
          styles.hotelTypo,
          styles.pencarianSokTypo,
        ]}
      >
        Rekomendasi Hotel
      </Text>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("ProductCard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-391.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.halloKemanaKamuContainer,
          styles.hotelTypo,
          styles.pencarianSokTypo,
        ]}
      >
        <Text style={styles.halloKemanaKamu}>Hallo, kemana kamu ingin</Text>
        <Text style={styles.pergiBerlibur}>pergi berlibur ?</Text>
      </Text>
      <View style={styles.dashboardInner} />
      <Text
        style={[styles.pencarianSok, styles.hotelTypo, styles.pencarianSokTypo]}
      >
        Pencarian sok..
      </Text>
      <View style={[styles.rectangleView, styles.ellipseIconLayout]} />
      <Image
        style={[styles.icon1, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/149852-1.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/8017777-1.png")}
      />
      <Image
        style={[styles.image1Icon, styles.udbPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.hotel, styles.hotelTypo, styles.udbTypo]}>
        Hotel
      </Text>
      <Text
        style={[
          styles.udb,
          styles.udbPosition,
          styles.hotelTypo,
          styles.udbTypo,
        ]}
      >
        UDB
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Image
        style={[styles.home1Icon, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/home-1.png")}
      />
      <Pressable
        style={[styles.pressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("FavoriteScreen")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/102279-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable1, styles.pressableLayout]}
        onPress={() => navigation.navigate("ShopScreen")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/2838838-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable2, styles.pressableLayout]}
        onPress={() => navigation.navigate("AkunScreen")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/64572-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("ProductCard3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-29.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("ProductCard2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-281.png")}
        />
      </Pressable>
      <Text style={[styles.kilometer, styles.kilometerTypo]}>
        5,8 kilometer
      </Text>
      <Text style={[styles.hotelLorKono, styles.kilometerTypo]}>
        Hotel Lor Kono
      </Text>
      <Text style={[styles.kilometer1, styles.kilometerTypo]}>
        5,8 kilometer
      </Text>
      <Text style={[styles.hotelLorKono1, styles.kilometerTypo]}>
        Hotel Lor Kono
      </Text>
      <Text style={[styles.kilometer2, styles.kilometer2Typo]}>
        5,8 kilometer
      </Text>
      <Text style={[styles.hotelLorKono2, styles.kilometer2Typo]}>
        Hotel Lor Kono
      </Text>
      <View style={[styles.dashboardChild1, styles.dashboardChildLayout]} />
      <Text style={[styles.kos, styles.kosTypo]}>Kos</Text>
      <View style={[styles.dashboardChild2, styles.dashboardChildLayout]} />
      <Text style={[styles.hotel1, styles.kosTypo]}>Hotel</Text>
      <View style={[styles.dashboardChild3, styles.dashboardChildLayout]} />
      <Text style={[styles.apatermen, styles.kosTypo]}>Apatermen</Text>
      <View style={[styles.dashboardChild4, styles.dashboardChildLayout]} />
      <Text style={[styles.losmen, styles.kosTypo]}>Losmen</Text>
      <Pressable
        style={[styles.linePressable, styles.linePosition]}
        onPress={() => navigation.goBack()}
      />
      <View style={[styles.lineView, styles.linePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardLayout: {
    height: 218,
    width: 151,
    borderRadius: Border.br_lg,
    top: 542,
    position: "absolute",
  },
  hotelTypo: {
    textAlign: "left",
    fontSize: FontSize.size_2xl,
  },
  pencarianSokTypo: {
    color: Color.black,
    fontFamily: FontFamily.itim,
    textAlign: "left",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  frameLayout: {
    height: 200,
    width: 200,
    top: 317,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  ellipseIconLayout: {
    width: 60,
    height: 60,
    position: "absolute",
  },
  iconLayout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  iconPosition: {
    left: 47,
    width: 30,
  },
  udbPosition: {
    top: 56,
    position: "absolute",
  },
  udbTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
  },
  pressableLayout: {
    height: 31,
    top: 794,
    width: 30,
    position: "absolute",
  },
  kilometerTypo: {
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  kilometer2Typo: {
    left: 292,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  dashboardChildLayout: {
    height: 40,
    width: 110,
    top: 260,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  kosTypo: {
    top: 270,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  linePosition: {
    height: 3,
    borderTopWidth: 3,
    borderColor: "#000",
    borderStyle: "solid",
    left: 35,
    position: "absolute",
  },
  dashboardChild: {
    left: 28,
  },
  dashboardItem: {
    left: 202,
  },
  rekomendasiHotel: {
    left: 29,
    top: 479,
  },
  icon: {
    borderRadius: Border.br_xl,
    height: "100%",
  },
  wrapper: {
    left: 29,
  },
  halloKemanaKamu: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pergiBerlibur: {
    margin: Margin.m_md,
  },
  halloKemanaKamuContainer: {
    top: 113,
    left: 36,
  },
  dashboardInner: {
    top: 185,
    width: 245,
    height: 60,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_md,
    left: 34,
    position: "absolute",
  },
  pencarianSok: {
    left: 90,
    top: 198,
  },
  rectangleView: {
    top: 183,
    left: 340,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_md,
    width: 60,
  },
  icon1: {
    top: 200,
    height: 30,
  },
  icon2: {
    left: 355,
    height: 30,
    top: 198,
  },
  image1Icon: {
    left: 139,
    width: 35,
    height: 30,
  },
  hotel: {
    top: 52,
    left: 222,
    fontFamily: FontFamily.kaushanScript,
    color: Color.red_100,
    width: 67,
    height: 56,
    position: "absolute",
  },
  udb: {
    left: 174,
    fontFamily: FontFamily.aBeeZee,
    color: Color.indigo_100,
    width: 64,
    height: 46,
  },
  ellipseIcon: {
    top: 41,
    left: 333,
  },
  rectangleIcon: {
    top: 775,
    left: 0,
    width: 428,
    height: 70,
    position: "absolute",
  },
  home1Icon: {
    top: 795,
    height: 30,
  },
  pressable: {
    left: 135,
  },
  pressable1: {
    left: 224,
  },
  pressable2: {
    left: 323,
  },
  container: {
    left: 511,
  },
  frame: {
    left: 273,
  },
  kilometer: {
    top: 483,
    left: 46,
  },
  hotelLorKono: {
    top: 465,
    left: 40,
  },
  kilometer1: {
    left: 529,
    top: 479,
  },
  hotelLorKono1: {
    left: 525,
    top: 469,
  },
  kilometer2: {
    top: 484,
  },
  hotelLorKono2: {
    top: 469,
  },
  dashboardChild1: {
    left: 418,
  },
  kos: {
    left: 460,
  },
  dashboardChild2: {
    left: 34,
    height: 40,
    width: 110,
    top: 260,
  },
  hotel1: {
    left: 70,
  },
  dashboardChild3: {
    left: 290,
  },
  apatermen: {
    left: 308,
  },
  dashboardChild4: {
    left: 162,
  },
  losmen: {
    left: 191,
  },
  linePressable: {
    top: 50,
    width: 43,
  },
  lineView: {
    top: 75,
    width: 53,
  },
  dashboard: {
    backgroundColor: Color.white,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard;
