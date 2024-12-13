import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green[300],
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
    fontSize: 16,
  },
});
