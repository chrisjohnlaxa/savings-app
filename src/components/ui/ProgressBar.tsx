import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Radius } from "../../constants/theme";

type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 1);

  return (
    <View style={styles.track}>
      <View
        style={[
          styles.fill,
          {
            width: `${safeProgress * 100}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: Colors.border,
    borderRadius: Radius.full,
    overflow: "hidden",
  },

  fill: {
    height: "100%",
    backgroundColor: Colors.secondary,
    borderRadius: Radius.full,
  },
});
