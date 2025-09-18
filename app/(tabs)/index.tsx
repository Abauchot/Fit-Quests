
import { Text, View } from '@/components/Themed';
import { COLORS } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Text as RNText, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={[COLORS.DEEP_PURPLE, COLORS.VIBRANT_ORANGE]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Fit&Quest</Text>
        <View style={styles.separator} lightColor={COLORS.VIBRANT_ORANGE} darkColor={COLORS.WINE_RED} />
        <Text style={styles.subtitle}>Get ready for adventure!</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <RNText style={styles.buttonText}>Start a quest</RNText>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.CREAM + 'CC',
    margin: 20,
    borderRadius: 24,
    shadowColor: COLORS.DARK_PURPLE,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.BRIGHT_RED,
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: COLORS.DARK_PURPLE,
    marginBottom: 30,
  },
  separator: {
    marginVertical: 30,
    height: 3,
    width: '60%',
    borderRadius: 2,
    backgroundColor: COLORS.VIBRANT_ORANGE,
  },
  button: {
    backgroundColor: COLORS.BRIGHT_RED,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    shadowColor: COLORS.WINE_RED,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  buttonText: {
    color: COLORS.CREAM,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
});
