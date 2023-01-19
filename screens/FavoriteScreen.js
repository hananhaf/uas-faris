import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FavoriteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.favoriteScreen}>
      <Image
        style={styles.favoriteScreenChild}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Image
        style={[
          styles.bookmark1Icon,
          styles.iconLayout1,
          styles.pressableLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/bookmark-1.png")}
      />
      <Pressable
        style={[styles.pressable, styles.iconLayout1, styles.pressableLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1946436-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/64572-3.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/2838838-1.png")}
      />
      <Image
        style={[
          styles.favoriteScreenItem,
          styles.favoriteChildLayout1,
          styles.favoritePosition,
          styles.favoriteLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-392.png")}
      />
      <Image
        style={[
          styles.favoriteScreenInner,
          styles.favoriteLayout,
          styles.favoritePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-393.png")}
      />
      <Text style={[styles.hotelLorKono, styles.hotelTypo3]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.favoriteLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-291.png")}
      />
      <Text style={[styles.hotelLorKono1, styles.hotelTypo2]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.favoriteChildLayout, styles.favoriteLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-282.png")}
      />
      <Text style={[styles.hotelLorKono2, styles.hotelTypo3]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[
          styles.favoriteScreenChild2,
          styles.favoriteChildPosition,
          styles.favoritePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-392.png")}
      />
      <Text style={[styles.hotelLorKono3, styles.hotelTypo1]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.favoriteScreenChild3, styles.favoriteChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-292.png")}
      />
      <Text style={[styles.hotelLorKono4, styles.hotelTypo2]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.favoriteChildPosition, styles.favoriteChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-283.png")}
      />
      <Text style={[styles.hotelLorKono5, styles.hotelTypo1]}>
        Hotel Lor Kono
      </Text>
      <Text style={[styles.kilometer, styles.kilometerTypo]}>
        5,8 kilometer
      </Text>
      <Text style={[styles.hotelLorKono6, styles.kilometerTypo]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.image1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.hotel, styles.udbTypo]}>Hotel</Text>
      <Text style={[styles.udb, styles.udbTypo]}>UDB</Text>
      <Text style={[styles.hotelLorKono7, styles.hotelTypo]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[
          styles.favoriteScreenChild5,
          styles.favoriteChildLayout1,
          styles.favoriteLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-293.png")}
      />
      <Text style={[styles.hotelLorKono8, styles.hotelTypo]}>
        Hotel Lor Kono
      </Text>
      <Image
        style={[styles.favoriteScreenChild6, styles.favoriteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-284.png")}
      />
      <Text style={[styles.hotelLorKono9, styles.hotelTypo]}>
        Hotel Lor Kono
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 30,
    position: "absolute",
  },
  pressableLayout: {
    width: 30,
    top: 789,
    height: 30,
  },
  iconLayout: {
    height: 31,
    top: 786,
    width: 30,
    position: "absolute",
  },
  favoriteChildLayout1: {
    height: 183,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  favoritePosition: {
    left: 17,
    width: 177,
  },
  favoriteLayout1: {
    top: 121,
    height: 183,
    borderRadius: Border.br_xl,
  },
  favoriteLayout: {
    height: 182,
    top: 343,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  hotelTypo3: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 487,
    height: 18,
    position: "absolute",
  },
  hotelTypo2: {
    height: 17,
    width: 86,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  favoriteChildPosition: {
    top: 553,
    height: 183,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  hotelTypo1: {
    top: 698,
    width: 89,
    height: 17,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  favoriteChildLayout: {
    width: 178,
    left: 230,
  },
  kilometerTypo: {
    left: 474,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  udbTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  hotelTypo: {
    top: 265,
    height: 18,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  favoriteScreenChild: {
    top: 775,
    left: 0,
    width: 428,
    height: 70,
    position: "absolute",
  },
  bookmark1Icon: {
    left: 149,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 58,
  },
  icon1: {
    left: 331,
  },
  icon2: {
    left: 240,
  },
  favoriteScreenItem: {
    width: 177,
  },
  favoriteScreenInner: {
    width: 177,
  },
  hotelLorKono: {
    left: 55,
    width: 91,
    height: 18,
  },
  rectangleIcon: {
    left: 465,
    width: 177,
  },
  hotelLorKono1: {
    top: 446,
    left: 486,
  },
  hotelLorKono2: {
    left: 271,
    width: 90,
    height: 18,
  },
  favoriteScreenChild2: {
    width: 177,
  },
  hotelLorKono3: {
    left: 59,
    width: 89,
  },
  favoriteScreenChild3: {
    left: 468,
    width: 177,
  },
  hotelLorKono4: {
    top: 650,
    left: 489,
  },
  hotelLorKono5: {
    left: 274,
    width: 89,
  },
  kilometer: {
    top: 586,
    width: 78,
    height: 18,
  },
  hotelLorKono6: {
    top: 570,
    height: 16,
    width: 90,
  },
  image1Icon: {
    left: 139,
    width: 35,
    top: 26,
  },
  hotel: {
    top: 22,
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
    top: 26,
  },
  hotelLorKono7: {
    left: 53,
    width: 90,
  },
  favoriteScreenChild5: {
    left: 463,
    width: 177,
  },
  hotelLorKono8: {
    left: 481,
    width: 89,
  },
  favoriteScreenChild6: {
    top: 124,
    left: 218,
    width: 176,
  },
  hotelLorKono9: {
    left: 269,
    width: 89,
  },
  favoriteScreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
  },
});

export default FavoriteScreen;
