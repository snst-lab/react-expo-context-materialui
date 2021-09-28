import * as Linking from "expo-linking";
import {
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
} from "@react-navigation/stack";
import { Animated } from "react-native";
import { ScreenOption } from "@types";
import { HomeScreen, TabOneScreen, TabTwoScreen, _404Screen } from "@/screens";

export const homeScreen = "Home";

const screens: Record<string, ScreenOption> = {
  Home: {
    path: "",
    screen: HomeScreen,
    options: option({
      title: "Home",
      animationEnabled: false,
    }),
  },
  TabOne: {
    path: "one",
    screen: TabOneScreen,
    options: option({
      title: "Page 1",
      animationEnabled: false,
    }),
  },
  TabTwo: {
    path: "two",
    screen: TabTwoScreen,
    options: option({
      title: "Page 2",
    }),
  },
  _404: {
    path: "*",
    screen: _404Screen,
    options: option({
      title: "404 Not Found",
      animationEnabled: false,
    }),
  },
};

function option(additionalOptions?: Record<string, any>) {
  const defaultOptions = {
    animationEnabled: true,
    gestureEnabled: true,
    gestureDirection: "horizontal",
    cardStyleInterpolator: animationHorizontal,
    transitionSpec: {
      open: {
        animation: "spring",
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 1,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      },
      close: {
        animation: "spring",
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 1,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      },
    },
  };
  return typeof additionalOptions !== "undefined"
    ? Object.assign({}, Object.assign(defaultOptions, additionalOptions))
    : defaultOptions;
}

function animationHorizontal({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  const translateFocused = Animated.multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: "clamp",
    }),
    inverted
  );
  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: "clamp",
  });
  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: "clamp",
  });
  return {
    cardStyle: {
      transform: [
        // Translation for the animation of the current card
        { translateX: translateFocused },
        // Translation for the animation of the card in back
        { translateX: 0 },
      ],
    },
    overlayStyle: { opacity: overlayOpacity },
    shadowStyle: { shadowOpacity },
  };
}

export const routeConfig = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: screens,
  },
};
