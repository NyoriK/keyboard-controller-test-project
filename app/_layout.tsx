import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const RootLayout = () => {
  return (
    <KeyboardProvider
      statusBarTranslucent
      navigationBarTranslucent
    >
      <Stack>
        <Stack.Screen name='index' />
      </Stack>
    </KeyboardProvider>
  )
}

export default RootLayout