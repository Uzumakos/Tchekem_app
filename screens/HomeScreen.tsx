import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from '../components/Pin';
import pins from '../assets/data/pins';


export default function HomeScreen({ navigation, }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/*1rst column pou tchek yo */}
      <View style={styles.column}>
      
        {pins.filter((item, index) => index % 2 === 0).map(pini => <Pin pini={pini} image={undefined} title={undefined} />)}
      </View>
      {/*2nd column pou tchek yo */}
      <View style={styles.column}>

        {pins.filter((item, index) => index % 2 === 1).map(pini => <Pin pini={pini} image={undefined} title={undefined} />)}
      </View>

      </View>
    </ScrollView>
  
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
