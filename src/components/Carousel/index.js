import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import CarouselAnimation from "react-native-reanimated-carousel";
import { regalos } from "../mockdata/home";
const Carousel = ({ navigation }) => {
  return (
    <View style={{ width: "100%", marginTop: 10 }}>
      <CarouselAnimation
        width={Dimensions.get("window").width}
        height={160}
        data={regalos}
        loop
        autoPlay={true}
        autoPlayInterval={3000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.95,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("Banner", {
                brands: item.brands,
                phrase: item.phrase,
              })
            }
          >
            <View
              style={{
                width: Dimensions.get("window").width,
                height: 160,
                paddingHorizontal: 17,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
              }}
            >
              <Image
                source={item.img}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default Carousel;