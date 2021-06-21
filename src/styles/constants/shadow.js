import { StyleSheet } from "react-native"
import color from "./color"
// TODO match styles ios x android with elevation

const shadow = StyleSheet.create({
  shadow1: {
    shadowColor: color.gray500,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 3 },
    elevation: 1,
  },

  shadow2: {
    shadowColor: color.gray500,
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 10 },
    elevation: 2,
  },

  shadow3: {
    shadowColor: color.gray500,
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: -4, height: 10 },
    elevation: 3,
  },

  shadow4: {
    elevation: 4,
  },

  shadow5: {
    elevation: 5,
  },

  // TODO: use shadow1,2,3... with blur degrade
  primaryShadow: {
    shadowColor: color.greyShade,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
  shadowBottom: {
    shadowColor: "#333",
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: { height: 3 },
  },

  cardPicture: {
    shadowColor: "#BBB",
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 10 },
  },
})

export default shadow
