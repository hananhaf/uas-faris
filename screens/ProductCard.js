import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProductCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productCard}>
      <Image
        style={[styles.productCardChild, styles.productCardPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/102279-3.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/2838838-1.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/2838838-1.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/64572-3.png")}
      />
      <Pressable
        style={styles.home3}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon4}
          resizeMode="cover"
          source={require("../assets/home-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.productCardItem, styles.productCardPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text
        style={[
          styles.rp37500000,
          styles.rp37500000FlexBox,
          styles.rp37500000Typo,
        ]}
      >
        Rp. 375.000,00
      </Text>
      <Text
        style={[
          styles.freeSarapanContainer,
          styles.rp37500000FlexBox,
          styles.rp37500000Typo,
        ]}
      >
        <Text style={styles.freeSarapan}>Free sarapan + snack</Text>
        <Text style={styles.freeSarapan}>Kolam Renang</Text>
        <Text style={styles.freeSarapan}>Mandi Air Hangat</Text>
        <Text style={styles.freeSarapan}>TV All Channel</Text>
      </Text>
      <Text style={[styles.hotelLorKono, styles.rp37500000FlexBox]}>
        Hotel Lor Kono
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productCardPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 31,
    width: 30,
    position: "absolute",
  },
  iconPosition: {
    top: 795,
    height: 31,
  },
  rp37500000FlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rp37500000Typo: {
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_2xl,
    color: Color.black,
  },
  productCardChild: {
    top: 776,
    height: 70,
  },
  icon: {
    left: 154,
  },
  icon1: {
    top: 796,
    left: 239,
  },
  icon2: {
    top: 599,
    left: 69,
  },
  icon3: {
    left: 324,
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  home3: {
    height: 30,
    left: 69,
    width: 30,
    top: 795,
    position: "absolute",
  },
  productCardItem: {
    top: 0,
    height: 299,
  },
  rp37500000: {
    top: 607,
    left: 243,
  },
  freeSarapan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  freeSarapanContainer: {
    top: 393,
    left: 69,
  },
  hotelLorKono: {
    top: 325,
    left: 130,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibre,
  },
  productCard: {
    backgroundColor: Color.white,
    flex: 1,
    height: 846,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProductCard;
