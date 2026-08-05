import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { Radius, Spacing } from "../../constants/theme";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export function Button({ title, onPress, variant = "primary" }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, isPrimary ? styles.primary : styles.secondary]}
    >
      <Text
        style={[
          styles.text,
          isPrimary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.lg,
  },

  primary: {
    backgroundColor: Colors.primary,
  },

  secondary: {
    backgroundColor: Colors.secondary,
  },

  text: {
    fontSize: 16,
    fontWeight: "700",
  },

  primaryText: {
    color: Colors.white,
  },

  secondaryText: {
    color: Colors.text,
  },
});
