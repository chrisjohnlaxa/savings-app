import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Radius, Spacing } from "../../constants/theme";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
