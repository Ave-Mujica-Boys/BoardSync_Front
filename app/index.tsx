import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModalType } from '@/src/types/enums';

export default function HomeScreen() {
    const { top } = useSafeAreaInsets();
    const showModal = async(type: ModalType) => {

    };
    const openLink = () => {

    };

    return (
    <View style={[
        styles.container, {
            paddingTop: top + 30,
        },
    ]}>
        <Image source={require('@/src/assets/images/login/trello.png')} style={styles.image}/>
        <Text style={styles.introText}>Plan, Track, Succeed - Start Here!</Text>

        <View style={styles.bottomContainer}>
            <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff'}]} onPress={() => showModal(ModalType.Login)}>
                <Text style={[styles.btnText, { color: Colors.primary }]}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]} onPress={() => showModal(ModalType.Login)}>
                <Text style={[styles.btnText, { color: '#fff' }]}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.description}>
                By signing up, you agree to the{' '} 
                <Text style={styles.link} onPress={openLink}>User Notice</Text>{' '}
                and{' '}
                <Text style={styles.link} onPress={openLink}>Privacy Policy</Text>.
            </Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  image: {
    height: 450,
    paddingHorizontal: 40,
    resizeMode: 'contain',
  },
  introText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 17,
    padding: 30,
  },
  bottomContainer: {
    gap: 10,
    width: '100%',
    paddingHorizontal: 40,
  },
  btn: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1
  },
  btnText: {
    fontSize: 18,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 60,
  },
  link: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});