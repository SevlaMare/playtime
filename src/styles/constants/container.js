import { StyleSheet } from "react-native"
import color from "./color"

const container = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: 13,
    paddingTop: 66,
    paddingBottom: 80,
  },
  containerFluid: {
    width: "100%",
  },

  box0: {
    width: 20,
    height: 20,
  },
  box1: {
    width: 25,
    height: 25,
  },
  box2: {
    width: 30,
    height: 30,
  },
  box3: {
    width: 35,
    height: 35,
  },
  box5: {
    width: 50,
    height: 50,
  },

  // image utilities
  cover: { resizeMode: "cover" },
  contain: { resizeMode: "contain" },
  rounded: { borderRadius: 100 },
  noBorderRadius: { borderRadius: 0 },
  imgFluid: { width: "100%" },
})

export default container
