import { View, Text, Image } from "react-native";

import { styles } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Boas vindas ao Nearby!</Text>
      <Text style={styles.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}