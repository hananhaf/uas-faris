import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const LoginScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen2}>
      <Pressable
        style={[styles.loginScreen2Child, styles.loginLayout]}
        onPress={() => navigation.navigate("LoginScreen3")}
      />
      <Text
        style={[
          styles.facebook,
          styles.googleTypo,
          styles.googleTypo1,
          styles.googlePosition,
        ]}
      >
        Facebook
      </Text>
      <Image
        style={[styles.facebook1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/facebook-1.png")}
      />
      <Pressable
        style={[styles.loginScreen2Item, styles.loginLayout]}
        onPress={() => navigation.navigate("LoginScreen3")}
      />
      <Text
        style={[
          styles.google,
          styles.googleTypo,
          styles.googleTypo1,
          styles.googlePosition,
        ]}
      >
        Google
      </Text>
      <Image
        style={[styles.google1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/google-1.png")}
      />
      <Image
        style={[styles.loginScreen2Inner, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text style={[styles.namaDepan, styles.namaTypo, styles.emailIdTypo]}>
        Nama Depan
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text style={[styles.namaBelakang, styles.namaTypo, styles.masukkanTypo]}>
        Nama Belakang
      </Text>
      <Image
        style={[styles.loginScreen2Child1, styles.loginChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={[styles.emailId, styles.namaTypo, styles.emailIdTypo]}>
        Email ID
      </Text>
      <Image
        style={[styles.loginScreen2Child2, styles.loginChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.loginScreen2Child3, styles.loginChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={[styles.masukkanNomorTelepon, styles.textTypo]}>
        masukkan nomor telepon
      </Text>
      <Text style={[styles.text, styles.textTypo]}>+62</Text>
      <Text
        style={[
          styles.masukkanKataKunci,
          styles.iconPosition,
          styles.namaTypo,
          styles.masukkanTypo,
        ]}
      >
        masukkan kata kunci
      </Text>
      <Text
        style={[
          styles.masukkanKataKunci1,
          styles.namaTypo,
          styles.masukkanTypo,
        ]}
      >
        masukkan kata kunci
      </Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/159604-1.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/2151329-1.png")}
      />
      <Image
        style={styles.loginScreen2Child4}
        resizeMode="cover"
        source={require("../assets/rectangle-111.png")}
      />
      <Text style={[styles.recaptcha, styles.googleTypo]}>reCAPTCHA</Text>
      <Text style={[styles.imNotA, styles.googleTypo]}>I’m not a robot</Text>
      <View style={[styles.rectangleView, styles.iconLayout1]} />
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/6726856-1.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.loginChildLayout]}
        onPress={() => navigation.navigate("LoginScreen3")}
      />
      <Text style={[styles.sudahMemilikiAkunContainer, styles.namaTypo]}>
        <Text style={styles.sudahMemilikiAkun}>sudah memiliki akun?</Text>
        <Text style={[styles.masuk, styles.masukkanTypo]}> Masuk</Text>
      </Text>
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
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-3.png")}
      />
      <Text style={[styles.daftar, styles.googleTypo, styles.googleTypo1]}>
        Daftar
      </Text>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.hotel, styles.udbTypo]}>Hotel</Text>
      <Text style={[styles.udb, styles.udbTypo]}>UDB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 50,
    width: 170,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  googleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  googleTypo1: {
    color: Color.white,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  googlePosition: {
    top: 96,
    fontSize: FontSize.size_lg,
  },
  iconLayout1: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 60,
    width: 185,
    top: 199,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  namaTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  emailIdTypo: {
    left: 50,
    color: Color.gray_300,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  masukkanTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibre,
  },
  loginChildLayout: {
    width: 375,
    height: 60,
    left: 30,
    position: "absolute",
  },
  textTypo: {
    top: 460,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition: {
    top: 368,
    position: "absolute",
  },
  iconLayout: {
    width: 35,
    position: "absolute",
  },
  denganMasukAtauTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  udbTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  loginScreen2Child: {
    top: 84,
    left: 235,
    backgroundColor: Color.gray_500,
  },
  facebook: {
    left: 290,
  },
  facebook1Icon: {
    top: 94,
    left: 260,
  },
  loginScreen2Item: {
    top: 83,
    backgroundColor: Color.red_200,
    left: 30,
  },
  google: {
    left: 91,
  },
  google1Icon: {
    top: 93,
    left: 51,
  },
  loginScreen2Inner: {
    left: 30,
  },
  namaDepan: {
    color: Color.gray_300,
    top: 220,
  },
  rectangleIcon: {
    left: 220,
  },
  namaBelakang: {
    left: 237,
    color: Color.gray_300,
    top: 220,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  loginScreen2Child1: {
    top: 273,
    borderRadius: Border.br_xs,
  },
  emailId: {
    top: 294,
    color: Color.gray_300,
  },
  loginScreen2Child2: {
    top: 347,
    borderRadius: Border.br_xs,
  },
  loginScreen2Child3: {
    top: 440,
    borderRadius: Border.br_xs,
  },
  masukkanNomorTelepon: {
    left: 133,
    color: Color.gray_300,
  },
  text: {
    left: 96,
    color: Color.black,
  },
  masukkanKataKunci: {
    color: Color.gray_300,
    left: 51,
    fontFamily: FontFamily.abhayaLibre,
  },
  masukkanKataKunci1: {
    top: 150,
    left: 147,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  icon: {
    left: 373,
    width: 20,
    height: 20,
  },
  icon1: {
    top: 452,
    height: 35,
    left: 51,
  },
  loginScreen2Child4: {
    top: 516,
    width: 230,
    height: 80,
    borderRadius: Border.br_xs,
    left: 30,
    position: "absolute",
  },
  recaptcha: {
    top: 557,
    left: 177,
    fontSize: FontSize.size_3xs,
    color: Color.gray_300,
  },
  imNotA: {
    top: 543,
    left: 73,
    fontSize: FontSize.size_sm,
    color: Color.gray_300,
  },
  rectangleView: {
    top: 535,
    left: 40,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  icon2: {
    top: 530,
    left: 180,
  },
  rectanglePressable: {
    top: 622,
    backgroundColor: Color.brown,
    borderRadius: Border.br_sm,
    width: 375,
  },
  sudahMemilikiAkun: {
    color: Color.gray_400,
    fontFamily: FontFamily.abhayaLibre,
  },
  masuk: {
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
  },
  sudahMemilikiAkunContainer: {
    top: 701,
    left: 123,
    position: "absolute",
  },
  denganMasukAtau: {
    top: 806,
    left: 65,
    color: Color.gray_400,
  },
  syaratDanKetentuan: {
    color: Color.black,
  },
  dan: {
    color: Color.gray_200,
  },
  syaratDanKetentuanContainer: {
    top: 820,
    left: 101,
  },
  lineIcon: {
    top: 783,
    left: 13,
    width: 409,
    height: 2,
    position: "absolute",
  },
  daftar: {
    top: 640,
    left: 186,
  },
  image1Icon: {
    left: 145,
    height: 30,
    top: 24,
  },
  hotel: {
    top: 20,
    left: 228,
    fontFamily: FontFamily.kaushanScript,
    color: Color.red_100,
    width: 67,
    height: 56,
  },
  udb: {
    fontFamily: FontFamily.aBeeZee,
    color: Color.indigo_100,
    width: 64,
    height: 46,
    top: 24,
    left: 180,
  },
  loginScreen2: {
    flex: 1,
    width: "100%",
    height: 854,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default LoginScreen2;
