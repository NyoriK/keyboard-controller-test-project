import TestForm from '@/components/TestForm';
import { View, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <TestForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});