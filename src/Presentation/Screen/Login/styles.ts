// styles.js (o styles.ts si estás utilizando TypeScript)
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    marginBottom: 16,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: 'blue',
    marginTop: 8,
    marginBottom: 16,
  },
  signUpButton: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  signUpText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default styles;
