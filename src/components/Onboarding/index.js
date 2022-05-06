import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import ON_BOARDING from "../../utils/constants/onboarding";
import THEME from "../../utils/constants/theme";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < ON_BOARDING.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          data={ON_BOARDING}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={ON_BOARDING} scrollX={scrollX} />
      {currentIndex < ON_BOARDING.length - 1 ? (
        <View style={styles.buttonOmitir}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonOmitirText}>Omitir</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonUnderstood}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonUnderstoodText}>Entendido</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.white,
  },
  buttonOmitir: {
    alignSelf: "flex-start",
  },
  buttonOmitirText: {
    fontSize: 15,
    color: THEME.colors.red,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 5,
  },
  buttonUnderstood: {
    alignSelf: "flex-end",
  },
  buttonUnderstoodText: {
    fontSize: 15,
    backgroundColor: THEME.colors.red,
    marginHorizontal: 20,
    marginBottom: 10,
    color: THEME.colors.white,
    borderRadius: 5,
    padding: 5,
  },
});
