import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShopScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shopscreen}>
      <Image
        style={[styles.shopscreenChild, styles.shopscreenLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Image
        style={[styles.shopscreenItem, styles.shopscreenLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.jumlah, styles.jumlahTypo]}>Jumlah</Text>
      <Text style={[styles.rp1275000000, styles.jumlahTypo]}>
        Rp. 12.750.000,00
      </Text>
      <Image
        style={[styles.icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/102279-3.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/64572-3.png")}
      />
      <Pressable
        style={[styles.pressable, styles.iconLayout, styles.pressableLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/1946436-1.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.shoppingCart1Icon,
          styles.iconLayout,
          styles.pressableLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/shoppingcart-1.png")}
      />
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.hotel, styles.udbTypo]}>Hotel</Text>
      <Text style={[styles.udb, styles.udbTypo]}>UDB</Text>
      <View style={[styles.shopscreenInner, styles.rectangleViewLayout]} />
      <Text style={[styles.freeSarapanContainer, styles.hotelContainerTypo]}>
        <Text style={styles.freeSarapan}>Free sarapan + snack</Text>
        <Text style={styles.freeSarapan}>Kolam Renang</Text>
        <Text style={styles.freeSarapan}>Mandi Air Hangat</Text>
        <Text style={styles.freeSarapan}>TV All Channel</Text>
      </Text>
      <Text style={[styles.rp37500000, styles.rp37500000Typo]}>
        Rp. 375.000,00
      </Text>
      <Text style={[styles.hotelLorKono, styles.hotelContainerTypo]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.freeSarapanContainer1, styles.hotelContainerTypo]}>
        <Text style={styles.freeSarapan}>Free sarapan + snack</Text>
        <Text style={styles.freeSarapan}>Kolam Renang</Text>
        <Text style={styles.freeSarapan}>Mandi Air Hangat</Text>
      </Text>
      <Text style={[styles.rp27500000, styles.rp37500000Typo]}>
        Rp. 275.000,00
      </Text>
      <Text style={[styles.hotelLorKono1, styles.hotelContainerTypo]}>
        Hotel Lor Kono
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.shopscreenChild1, styles.lineViewLayout]} />
      <Text style={[styles.kilometer, styles.kilometerTypo]}>
        5,8 kilometer
      </Text>
      <Text style={[styles.hotelLorKono2, styles.kilometerTypo]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.shopscreenChild2, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-28.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shopscreenLayout: {
    height: 70,
    width: 428,
    left: 0,
    position: "absolute",
  },
  jumlahTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_sm,
    top: 732,
    position: "absolute",
  },
  iconLayout1: {
    height: 31,
    width: 30,
    top: 795,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    position: "absolute",
  },
  pressableLayout: {
    top: 796,
    height: 30,
    width: 30,
  },
  udbTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 176,
    backgroundColor: Color.teal,
    width: 428,
    left: 0,
    position: "absolute",
  },
  hotelContainerTypo: {
    left: 156,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rp37500000Typo: {
    left: 310,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 100,
    width: 100,
    borderRadius: Border.br_xl,
    left: 39,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  kilometerTypo: {
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 539,
    textAlign: "left",
    position: "absolute",
  },
  shopscreenChild: {
    top: 776,
  },
  shopscreenItem: {
    top: 706,
  },
  jumlah: {
    left: 39,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_sm,
    top: 732,
  },
  rp1275000000: {
    left: 296,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_sm,
    top: 732,
  },
  icon: {
    left: 154,
  },
  icon1: {
    left: 323,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 66,
  },
  shoppingCart1Icon: {
    left: 242,
  },
  image1Icon: {
    left: 139,
    width: 35,
    top: 36,
  },
  hotel: {
    top: 32,
    left: 222,
    fontFamily: FontFamily.kaushanScript,
    color: Color.red_100,
    width: 67,
    height: 56,
  },
  udb: {
    left: 174,
    fontFamily: FontFamily.aBeeZee,
    color: Color.indigo_100,
    width: 64,
    height: 46,
    top: 36,
  },
  shopscreenInner: {
    top: 99,
  },
  freeSarapan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  freeSarapanContainer: {
    top: 167,
  },
  rp37500000: {
    top: 220,
  },
  hotelLorKono: {
    top: 144,
  },
  rectangleIcon: {
    top: 137,
  },
  rectangleView: {
    top: 275,
  },
  freeSarapanContainer1: {
    top: 341,
  },
  rp27500000: {
    top: 396,
  },
  hotelLorKono1: {
    top: 321,
  },
  lineView: {
    top: 275,
  },
  shopscreenChild1: {
    top: 452,
  },
  kilometer: {
    top: 640,
  },
  hotelLorKono2: {
    top: 621,
  },
  shopscreenChild2: {
    top: 313,
  },
  shopscreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 846,
    overflow: "hidden",
    width: "100%",
  },
});

export default ShopScreen;
