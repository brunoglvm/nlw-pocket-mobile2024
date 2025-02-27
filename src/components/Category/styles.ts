import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 10,
  },
  name: {
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    fontSize: 14,
  },
  containerSelected: {
    backgroundColor: colors.green[300],
    borderColor: colors.green[300],
    borderWidth: 1,
  },
  nameSelected: {
    color: colors.gray[100],
  },
});
