import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const LoadingScreen = () => {
  return (
    <View>
      <Text>LoadingScreen</Text>

      <Icon name="rocket" size={30} color="#900" />
    </View>
  )
}