import {View, Text, Image, ScrollView, TextInput} from 'react-native';

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      style={{
        backgroundColor: "lightgreen"
      }}
    >
      <Image
        source={{uri: "https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FFiddleSticks_0.jpg&w=1200&q=75"}}
        style={{
          width: 300, 
          height: 300}
        }
      />

      <View style={{
        height: 2,
        width: '90%',
        borderWidth: 1,
        marginVertical: 50,
        backgroundColor: 'blue',
      }}>
      </View>
        <Text>
          salve
        </Text>

    </ScrollView>
  );
}



