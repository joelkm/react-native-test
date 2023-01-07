import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("./assets/images/logo1.png")} />
        <Button title="Contact us" />
      </View>
      <View>
        <View>
          <Text style={styles.message}>Coming soon</Text>
          <Text style={styles.header} numberOfLines={2}>Bringing Muslims Together</Text>
          <View>
            <Image source={require("./assets/images/apple-store.png")} />
            <Image source={require("./assets/images/google-play.png")} />
          </View>
          <Image source={require("./assets/images/landing-image-1.png")} />
        </View>
        <View>
          <Text style={styles.message}>Coming soon</Text>
          <Text style={styles.header} numberOfLines={2}>Get Notified When We Launch</Text>
          <View></View>
          <Image source={require("./assets/images/landing-image-2.png")} />
        </View>
        <View style={styles.socials}>
          <Image style={styles.socialLink} source={require("./assets/images/facebook.png")}/>
          <Image style={styles.socialLink} source={require("./assets/images/twitter.png")}/>
          <Image style={styles.socialLink} source={require("./assets/images/instagram.png")}/>
          <Image style={styles.socialLink} source={require("./assets/images/tiktok.png")}/>
          <Image style={styles.socialLink} source={require("./assets/images/youtube.png")}/>
        </View>
      </View>
      <View style={styles.footer}>Copyright &#169 2022 Soora. All rights reserved</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: 1,
  },
  footer: {

  },
  header: {
    fontSize: 20,
  },
  message: {
    fontWeight: 'bold'
  },
  socials: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLink: {
    flex: 1,
    borderRadius: 999,
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  }
});
