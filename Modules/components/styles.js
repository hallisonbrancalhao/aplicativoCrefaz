import { StyleSheet } from 'react-native';

export const themeWhite = {
    colors: {
      primary: 'white',
      text: 'white',
      placeholder: 'white',
      underlineColor: 'white',
      outlineColor: 'white',
    },
};

export const styles = StyleSheet.create({
   card: {
    backgroundColor: '#111111',
    width: 300,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'left',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 700,
  },
  subtitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 400,
  },
  input: {
    marginTop: 25,
    color: '#fff' ,
    backgroundColor: '#222222',
    width: '80%'
  },
  button: {
    backgroundColor: 'rgb(32, 140, 15)',
    marginTop: 25,
    width: 150,
    borderRadius: 25,
  },
  link: {
    color: 'white',
    marginTop: 10,
  },
  error: {
    color: 'rgb(243, 65, 65)',
    paddingHorizontal:25,
    textAlign: 'center'
    
  },
  errorView: {
    marginVertical: 25,
    backgroundColor: '#0c0c0c' ,
  },
  text: {
    fontSize: 12,
    color: 'white',
  }
})