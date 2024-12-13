import { View } from "react-native";

import { router } from "expo-router";

import { Steps } from "@/components/Steps";
import { Welcome } from "@/components/Welcome";
import { Button } from "@/components/Button";

export default function Teste() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
