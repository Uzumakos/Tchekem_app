import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from '../components/Pin';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';


export default function HomeScreen() {
  return (
    <MasonryList pins={pins} />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
  }
});
