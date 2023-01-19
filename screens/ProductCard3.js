import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProductCard3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productCard3}>
      <Image
        style={[styles.productCard3Child, styles.productPosition]}
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
      <Text
        style={[
          styles.rp57500000,
          styles.rp57500000FlexBox,
          styles.rp57500000Typo,
        ]}
      >
        Rp. 575.000,00
      </Text>
      <Text
        style={[
          styles.freeSarapanContainer,
          styles.rp57500000FlexBox,
          styles.rp57500000Typo,
        ]}
      >
        <Text style={styles.freeSarapan}>Free sarapan + snack</Text>
        <Text style={styles.freeSarapan}>Kolam Renang</Text>
        <Text style={styles.freeSarapan}>Mandi Air Hangat</Text>
        <Text style={styles.freeSarapan}>Wifi + TV All Channel</Text>
      </Text>
      <Text style={[styles.hotelLorKono, styles.rp57500000FlexBox]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.productCard3Item, styles.productPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-46.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productPosition: {
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
    top: 793,
    height: 31,
  },
  rp57500000FlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rp57500000Typo: {
    fontFamily: FontFamily.itim,
    fontSize: FontSize.size_2xl,
    color: Color.black,
  },
  productCard3Child: {
    top: 774,
    height: 70,
  },
  icon: {
    left: 154,
  },
  icon1: {
    top: 794,
    left: 239,
  },
  icon2: {
    top: 612,
    left: 46,
  },
  icon3: {
    left: 324,
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  home3: {
    left: 69,
    height: 30,
    width: 30,
    top: 793,
    position: "absolute",
  },
  rp57500000: {
    top: 620,
    left: 220,
  },
  freeSarapan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  freeSarapanContainer: {
    top: 386,
    left: 84,
  },
  hotelLorKono: {
    top: 325,
    left: 145,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibre,
  },
  productCard3Item: {
    top: 0,
    height: 305,
  },
  productCard3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 846,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProductCard3;
