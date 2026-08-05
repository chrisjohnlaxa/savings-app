import { StyleSheet, Text, View } from "react-native";
import { GoalCard } from "../../components/goals/GoalCard";
import { Screen } from "../../components/ui/Screen";
import { Colors } from "../../constants/colors";
import { Spacing, Typography } from "../../constants/theme";

export default function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.greeting}>Good evening 👋</Text>

      <Text style={styles.title}>Let's work toward your goals.</Text>

      <View style={styles.summary}>
        <Text style={styles.summaryLabel}>Total Saved</Text>

        <Text style={styles.summaryAmount}>₱18,500</Text>
      </View>

      <Text style={styles.sectionTitle}>Active Goal</Text>

      <GoalCard
        name="Sister's Birthday"
        targetAmount={100000}
        currentAmount={18500}
        targetDate="Nov 30"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: Typography.small,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },

  title: {
    fontSize: Typography.title,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Spacing.xl,
  },

  summary: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 24,
    marginBottom: Spacing.xl,
  },

  summaryLabel: {
    color: Colors.white,
    opacity: 0.8,
    fontSize: Typography.small,
  },

  summaryAmount: {
    color: Colors.white,
    fontSize: 34,
    fontWeight: "800",
    marginTop: Spacing.sm,
  },

  sectionTitle: {
    fontSize: Typography.heading,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: Spacing.md,
  },
});
