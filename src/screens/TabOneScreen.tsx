import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from 'types';
import tw from 'twrnc';

const DATA = [
  {url: "https://channelchk.com/_next/image?url=https%3A%2F%2Fchannelchk-dev.s3.ap-east-1.amazonaws.com%2Fmedium_Cathiewood_8b6acc03d0.jpg&w=640&q=75"},
  {url: "https://channelchk.com/_next/image?url=https%3A%2F%2Fchannelchk-dev.s3.ap-east-1.amazonaws.com%2Fmedium_Cathiewood_8b6acc03d0.jpg&w=640&q=75"},
  {url: "https://channelchk.com/_next/image?url=https%3A%2F%2Fchannelchk-dev.s3.ap-east-1.amazonaws.com%2Fmedium_Cathiewood_8b6acc03d0.jpg&w=640&q=75"},
];
// infinite scroll fetch
// https://blog.jscrambler.com/implementing-infinite-scroll-with-react-query-and-flatlist-in-react-native/

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const renderItem = ({ item }: any) => {
    console.log(item);
    return (
      <Image
        style={styles.img}
        source={{
          uri: item.url,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={tw.style('text-red-500 text-3xl font-bold')}>askndkl</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(d,i) => `${d}-${i}`}
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  img: {
    width: 300,
    aspectRatio:1,
    resizeMode: 'stretch',
  },
});
