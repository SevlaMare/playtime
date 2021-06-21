import { StyleSheet } from "react-native"

const size = 10
const space = {
    "0.5x": size * 0.5,
    "0.8x": size * 0.8,
    "1x": size,
    "2x": size * 2,
    "3x": size * 3,
    "4x": size * 4,
}

const spacing = StyleSheet.create({
    // MARGIN TOP
    mt05: { marginTop: space["0.5x"] },
    mt08: { marginTop: space["0.8x"] },
    mt1: { marginTop: space["1x"] },
    mt2: { marginTop: space["2x"] },
    mt3: { marginTop: space["3x"] },
    mt4: { marginTop: space["4x"] },

    // MARGIN BOTTOM
    mb05: { marginBottom: space["0.5x"] },
    mb08: { marginBottom: space["0.8x"] },
    mb1: { marginBottom: space["1x"] },
    mb2: { marginBottom: space["2x"] },
    mb3: { marginBottom: space["3x"] },
    mb4: { marginBottom: space["4x"] },

    // MARGIN VERTICAL
    my05: { marginVertical: space["0.5x"] },
    my08: { marginVertical: space["0.8x"] },
    my1: { marginVertical: space["1x"] },
    my2: { marginVertical: space["2x"] },
    my3: { marginVertical: space["3x"] },
    my4: { marginVertical: space["4x"] },

    // MARGIN RIGHT
    mr1: { marginRight: space["1x"] },
    mr2: { marginRight: space["2x"] },
    mr4: { marginRight: space["4x"] },

    // MARGIN LEFT
    ml1: { marginLeft: space["1x"] },
    ml2: { marginLeft: space["2x"] },
    ml3: { marginLeft: space["4x"] },

    // MARGIN HORIZONTAL
    mx0: { marginHorizontal: 0 },
    mx1: { marginHorizontal: space["1x"] },
    mx2: { marginHorizontal: space["2x"] },
    mx3: { marginHorizontal: space["3x"] },
    mx4: { marginHorizontal: space["4x"] },

    // PADDING TOP
    pt05: { paddingTop: space["0.5x"] },
    pt1: { paddingTop: space["1x"] },
    pt2: { paddingTop: space["2x"] },
    pt3: { paddingTop: space["3x"] },
    pt4: { paddingTop: space["4x"] },

    // PADDING BOTTOM
    pb1: { paddingBottom: space["1x"] },
    pb2: { paddingBottom: space["2x"] },
    pb3: { paddingBottom: space["3x"] },
    pb4: { paddingBottom: space["4x"] },

    // PADDING HORIZONTAL
    px0: { paddingHorizontal: 0 },
    px2: { paddingHorizontal: space["2x"] },
    px3: { paddingHorizontal: space["3x"] },
    px4: { paddingHorizontal: space["4x"] },

    // BORDER RADIUS
    rounded1: { borderRadius: 8 },
    rounded2: { borderRadius: 15 },
    rounded3: { borderRadius: 35 },
})

export default spacing
