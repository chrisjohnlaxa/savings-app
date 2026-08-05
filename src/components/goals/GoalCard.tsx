import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Spacing, Typography } from "../../constants/theme";
import { Card } from "../ui/Card";
import { ProgressBar } from "../ui/ProgressBar";

type GoalCardProps = {
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
};

export function GoalCard({
  name,
  targetAmount,
  currentAmount,
  targetDate,
}: GoalCardProps) {
  const progress = currentAmount / targetAmount;

  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{targetDate}</Text>
      </View>

      <Text style={styles.amount}>
        ₱{currentAmount.toLocaleString()}
        <Text style={styles.target}> / ₱{targetAmount.toLocaleString()}</Text>
      </Text>

      <ProgressBar progress={progress} />

      <View style={styles.footer}>
        <Text style={styles.percent}>{Math.round(progress * 100)}%</Text>

        <Text style={styles.remaining}>
          ₱{Math.max(targetAmount - currentAmount, 0).toLocaleString()}{" "}
          remaining
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.md,
  },

  name: {
    fontSize: Typography.subheading,
    fontWeight: "700",
    color: Colors.text,
    flex: 1,
  },

  date: {
    fontSize: Typography.small,
    color: Colors.textSecondary,
  },

  amount: {
    fontSize: Typography.heading,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Spacing.md,
  },

  target: {
    fontSize: Typography.small,
    fontWeight: "400",
    color: Colors.textSecondary,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.sm,
  },

  percent: {
    fontSize: Typography.small,
    fontWeight: "700",
    color: Colors.primary,
  },

  remaining: {
    fontSize: Typography.small,
    color: Colors.textSecondary,
  },
});
