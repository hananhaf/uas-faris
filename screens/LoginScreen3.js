import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Margin } from "../GlobalStyles";

const LoginScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen3}>
      <View style={[styles.loginScreen3Child, styles.loginLayout1]} />
      <Text
        style={[
          styles.facebook,
          styles.googleTypo,
          styles.googleTypo1,
          styles.googlePosition1,
        ]}
      >
        Facebook
      </Text>
      <Image
        style={[styles.facebook1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/facebook-1.png")}
      />
      <View style={[styles.loginScreen3Item, styles.loginLayout1]} />
      <Text
        style={[
          styles.googlePosition,
          styles.googleTypo,
          styles.googleTypo1,
          styles.googlePosition1,
        ]}
      >
        Google
      </Text>
      <Image
        style={[
          styles.google1Icon,
          styles.google1IconPosition,
          styles.iconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/google-1.png")}
      />
      <Image
        style={[
          styles.loginScreen3Inner,
          styles.loginChildLayout,
          styles.loginLayout,
          styles.rectangleIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text
        style={[styles.namaDepan, styles.namaContainerTypo, styles.emailIdTypo]}
      >
        Nama Depan
      </Text>
      <Image
        style={[
          styles.rectangleIcon,
          styles.loginChildLayout,
          styles.loginLayout,
          styles.rectangleIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text
        style={[
          styles.namaBelakang,
          styles.namaContainerTypo,
          styles.masukkanTypo,
        ]}
      >
        Nama Belakang
      </Text>
      <Image
        style={[
          styles.loginScreen3Child1,
          styles.loginChildPosition,
          styles.loginChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text
        style={[styles.emailId, styles.namaContainerTypo, styles.emailIdTypo]}
      >
        Email ID
      </Text>
      <Image
        style={[
          styles.loginScreen3Child2,
          styles.loginChildPosition,
          styles.loginChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[
          styles.loginScreen3Child3,
          styles.loginChildPosition,
          styles.loginChildLayout,
        ]}
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
          styles.namaContainerTypo,
          styles.masukkanTypo,
        ]}
      >
        masukkan kata kunci
      </Text>
      <Text
        style={[
          styles.harusBerupaHuruf,
          styles.namaContainerTypo,
          styles.masukkanTypo,
        ]}
      >
        harus berupa huruf 8 biji, besar kecil, angka dan simbol
      </Text>
      <Text
        style={[
          styles.masukkanKataKunci1,
          styles.namaContainerTypo,
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
        style={[styles.loginScreen3Child4, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.recaptcha, styles.googleTypo]}>reCAPTCHA</Text>
      <Text style={[styles.imNotA, styles.googleTypo]}>I’m not a robot</Text>
      <View style={[styles.rectangleView, styles.iconLayout1]} />
      <Image
        style={[styles.icon2, styles.icon2Position, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/6726856-1.png")}
      />
      <View
        style={[
          styles.loginScreen3Child5,
          styles.loginScreen3Child5Layout,
          styles.loginChildPosition,
        ]}
      />
      <Text
        style={[styles.sudahMemilikiAkunContainer, styles.namaContainerTypo]}
      >
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
      <View style={styles.loginScreen3Child6} />
      <Text
        style={[
          styles.tidakMenerimaSmsContainer,
          styles.namaContainerTypo,
          styles.googlePosition,
        ]}
      >
        <Text style={styles.sudahMemilikiAkun}>tidak menerima sms?</Text>
        <Text style={[styles.masuk, styles.masukkanTypo]}>
          {" "}
          kirim ulang kode
        </Text>
      </Text>
      <Text
        style={[styles.text1, styles.namaContainerTypo, styles.masukkanTypo]}
      >
        02.00
      </Text>
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.kodePosition,
          styles.loginScreen3Child5Layout,
        ]}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Image
        style={[styles.loginScreen3Child7, styles.loginChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Text
        style={[
          styles.kode,
          styles.kodePosition,
          styles.namaContainerTypo,
          styles.masukkanTypo,
        ]}
      >{`Kode `}</Text>
      <Text
        style={[
          styles.verifikasiNomor62Container,
          styles.namaContainerTypo,
          styles.google1IconPosition,
          styles.masukkanTypo,
        ]}
      >
        <Text style={styles.verifikasiNomor62}>
          Verifikasi nomor +62 xxxx xxxx xxxxx
        </Text>
        <Text style={styles.melaluiSms}>melalui sms</Text>
      </Text>
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
      <Text
        style={[
          styles.verifikasi,
          styles.icon2Position,
          styles.googleTypo,
          styles.googleTypo1,
        ]}
      >
        Verifikasi
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout1: {
    height: 50,
    width: 170,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  googleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
  },
  googleTypo1: {
    color: Color.white,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  googlePosition1: {
    top: 96,
    fontSize: FontSize.size_lg,
  },
  iconLayout1: {
    height: 25,
    width: 25,
  },
  google1IconPosition: {
    left: 53,
    position: "absolute",
  },
  loginChildLayout: {
    height: 60,
    borderRadius: Border.br_xs,
  },
  loginLayout: {
    width: 185,
    position: "absolute",
  },
  rectangleIconLayout: {
    top: 199,
    height: 60,
    width: 185,
  },
  namaContainerTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  emailIdTypo: {
    left: 46,
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
  loginChildPosition: {
    width: 375,
    left: 26,
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
  icon2Position: {
    left: 176,
    position: "absolute",
  },
  loginScreen3Child5Layout: {
    backgroundColor: Color.brown,
    height: 60,
    borderRadius: Border.br_sm,
  },
  denganMasukAtauTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    position: "absolute",
  },
  googlePosition: {
    left: 87,
    position: "absolute",
  },
  kodePosition: {
    left: 75,
    position: "absolute",
  },
  udbTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  loginScreen3Child: {
    top: 84,
    left: 231,
    backgroundColor: Color.gray_500,
  },
  facebook: {
    left: 286,
    position: "absolute",
  },
  facebook1Icon: {
    top: 94,
    left: 256,
    position: "absolute",
  },
  loginScreen3Item: {
    top: 83,
    backgroundColor: Color.red_200,
    left: 26,
  },
  google1Icon: {
    top: 95,
  },
  loginScreen3Inner: {
    left: 26,
  },
  namaDepan: {
    color: Color.gray_300,
    top: 220,
  },
  rectangleIcon: {
    left: 216,
  },
  namaBelakang: {
    left: 233,
    color: Color.gray_300,
    top: 220,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  loginScreen3Child1: {
    top: 273,
  },
  emailId: {
    top: 294,
    color: Color.gray_300,
  },
  loginScreen3Child2: {
    top: 347,
  },
  loginScreen3Child3: {
    top: 440,
  },
  masukkanNomorTelepon: {
    left: 129,
    color: Color.gray_300,
  },
  text: {
    left: 92,
    color: Color.black,
  },
  masukkanKataKunci: {
    left: 47,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
  },
  harusBerupaHuruf: {
    top: 414,
    left: 30,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  masukkanKataKunci1: {
    top: 150,
    left: 143,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  icon: {
    left: 369,
    width: 20,
    height: 20,
  },
  icon1: {
    top: 452,
    height: 35,
    left: 47,
  },
  loginScreen3Child4: {
    top: 512,
    height: 80,
    borderRadius: Border.br_xs,
    width: 185,
    left: 26,
  },
  recaptcha: {
    top: 557,
    left: 173,
    fontSize: FontSize.size_3xs,
    color: Color.gray_300,
    position: "absolute",
  },
  imNotA: {
    top: 543,
    left: 69,
    fontSize: FontSize.size_sm,
    color: Color.gray_300,
    position: "absolute",
  },
  rectangleView: {
    top: 539,
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
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon2: {
    top: 530,
  },
  loginScreen3Child5: {
    top: 622,
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
    top: 705,
    left: 118,
    position: "absolute",
  },
  denganMasukAtau: {
    top: 809,
    left: 58,
    color: Color.gray_400,
  },
  syaratDanKetentuan: {
    color: Color.black,
  },
  dan: {
    color: Color.gray_200,
  },
  syaratDanKetentuanContainer: {
    top: 823,
    left: 94,
  },
  lineIcon: {
    top: 786,
    left: 6,
    width: 409,
    height: 2,
    position: "absolute",
  },
  loginScreen3Child6: {
    top: 224,
    left: 34,
    width: 360,
    height: 420,
    position: "absolute",
    backgroundColor: Color.white,
  },
  tidakMenerimaSmsContainer: {
    top: 562,
  },
  text1: {
    top: 536,
    left: 197,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  rectanglePressable: {
    top: 470,
    width: 280,
  },
  loginScreen3Child7: {
    top: 357,
    left: 54,
    width: 320,
    position: "absolute",
  },
  kode: {
    top: 379,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
  },
  verifikasiNomor62: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  melaluiSms: {
    margin: Margin.m_md,
  },
  verifikasiNomor62Container: {
    top: 299,
    color: Color.gray_300,
    fontFamily: FontFamily.abhayaLibre,
  },
  daftar: {
    top: 640,
    left: 201,
    position: "absolute",
  },
  image1Icon: {
    left: 134,
    height: 30,
    top: 21,
  },
  hotel: {
    top: 17,
    left: 217,
    fontFamily: FontFamily.kaushanScript,
    color: Color.red_100,
    width: 67,
    height: 56,
  },
  udb: {
    left: 169,
    fontFamily: FontFamily.aBeeZee,
    color: Color.indigo_100,
    width: 64,
    height: 46,
    top: 21,
  },
  verifikasi: {
    top: 488,
  },
  loginScreen3: {
    flex: 1,
    width: "100%",
    height: 854,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default LoginScreen3;
