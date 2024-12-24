import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";

export function Loading() {
  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <ActivityIndicator
        color={colors.green[300]}
        style={styles.container}
        size={"large"}
      />
    </>
  );
}
