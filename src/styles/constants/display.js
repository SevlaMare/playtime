import { StyleSheet } from "react-native"

const display = StyleSheet.create({
    flex: { flex: 1 },

    flexRow: { flexDirection: "row" },

    justifyContentBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    justifyContentCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
    justifyContentCenterColumn: {
        justifyContent: "center",
    },
    justifyContentEnd: {
        justifyContent: "flex-end",
    },
    justifyContentStart: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    alignItemsCenter: {
        alignItems: "center",
    },

    textCenter: { textAlign: "center" },
})

export default display
