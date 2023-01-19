import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen}>
      <View style={styles.loginScreenChild} />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/5481959-1.png")}
      />
      <Text style={[styles.denganMasukAtau, styles.denganMasukAtauTypo]}>
        Dengan masuk atau membuat akun, Anda setuju dengan kami
      </Text>
      <Text
        style={[styles.syaratDanKetentuanContainer, styles.denganMasukAtauTypo]}
      >
        <Text style={styles.syaratDanKetentuan}>{`Syarat dan Ketentuan `}</Text>
        <Text style={styles.dan}>Dan</Text>
        <Text style={styles.syaratDanKetentuan}> Persyaratan Privasi</Text>
      </Text>
      <Pressable
        style={[styles.loginScreenItem, styles.loginLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Text style={[styles.facebook, styles.masukTypo, styles.googlePosition]}>
        Facebook
      </Text>
      <Image
        style={styles.loginScreenInner}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Pressable
        style={styles.belumPunyaAkunContainer}
        onPress={() => navigation.navigate("LoginScreen2")}
      >
        <Text style={styles.belumPunyaAkun}>Belum punya akun?</Text>
        <Text style={styles.daftar}> Daftar</Text>
      </Pressable>
      <Text style={[styles.atauMasukDengan, styles.kataTypo]}>
        atau masuk dengan
      </Text>
      <Text style={[styles.lupaKataSandi, styles.kataTypo]}>
        Lupa kata sandi Anda?
      </Text>
      <Image
        style={[styles.facebook1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/facebook-12.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.emailId, styles.kataTypo]}>Email ID</Text>
      <View style={[styles.loginScreenChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.masukkanKataKunci, styles.kataTypo]}>
        masukkan kata kunci
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/159604-12.png")}
      />
      <Text style={[styles.masuk, styles.masukTypo]}>Masuk</Text>
      <Pressable
        style={[styles.loginScreenChild2, styles.loginLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Text style={[styles.google, styles.masukTypo, styles.googlePosition]}>
        Google
      </Text>
      <Image
        style={[styles.google1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/google-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  denganMasukAtauTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  loginLayout: {
    width: 157,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  masukTypo: {
    height: 49,
    color: Color.white,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  googlePosition: {
    top: 606,
    color: Color.white,
    fontSize: FontSize.size_lg,
  },
  kataTypo: {
    color: Color.gray_300,
    height: 38,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 60,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xs,
    width: 345,
    left: 31,
    position: "absolute",
  },
  loginScreenChild: {
    top: 0,
    left: 0,
    backgroundColor: "#293c87",
    width: 428,
    height: 257,
    position: "absolute",
  },
  icon: {
    top: 37,
    left: 101,
    width: 179,
    height: 178,
    position: "absolute",
  },
  denganMasukAtau: {
    top: 807,
    left: 63,
    color: Color.gray_400,
  },
  syaratDanKetentuan: {
    color: Color.black,
  },
  dan: {
    color: Color.gray_200,
  },
  syaratDanKetentuanContainer: {
    top: 821,
    left: 99,
  },
  loginScreenItem: {
    top: 594,
    left: 218,
    backgroundColor: Color.gray_500,
    height: 51,
  },
  facebook: {
    left: 269,
    width: 91,
  },
  loginScreenInner: {
    top: 784,
    left: 11,
    width: 393,
    height: 2,
    position: "absolute",
  },
  belumPunyaAkun: {
    color: Color.gray_400,
    fontFamily: FontFamily.abhayaLibre,
  },
  daftar: {
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
  },
  belumPunyaAkunContainer: {
    top: 680,
    left: 118,
    width: 189,
    height: 38,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  atauMasukDengan: {
    top: 551,
    left: 140,
    width: 140,
  },
  lupaKataSandi: {
    top: 431,
    left: 204,
    width: 156,
  },
  facebook1Icon: {
    top: 604,
    left: 242,
    width: 23,
  },
  rectangleView: {
    top: 276,
  },
  emailId: {
    top: 292,
    left: 51,
    width: 67,
  },
  loginScreenChild1: {
    top: 361,
  },
  masukkanKataKunci: {
    top: 379,
    left: 49,
    width: 155,
  },
  rectanglePressable: {
    top: 472,
    backgroundColor: Color.brown,
    height: 61,
    width: 345,
    left: 31,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  icon1: {
    top: 378,
    left: 342,
    width: 18,
    height: 20,
    position: "absolute",
  },
  masuk: {
    top: 490,
    left: 178,
    width: 73,
  },
  loginScreenChild2: {
    top: 593,
    left: 30,
    backgroundColor: Color.red_200,
    height: 50,
  },
  google: {
    left: 86,
    width: 75,
  },
  google1Icon: {
    top: 605,
    left: 54,
    width: 24,
  },
  loginScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 854,
    overflow: "hidden",
  },
});

export default LoginScreen;
