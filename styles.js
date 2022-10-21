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
   main: {
    backgroundColor: '#222222',
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
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
    marginBottom: 25,
    backgroundColor: '#041014',
    marginTop: 25,
    width: '80%',
    borderRadius: 25,
  },
  link: {
    color: 'white',
    marginTop: 10,
  },
  radios: {
    display: 'inline',
  },
  error: {
    color: 'rgb(243, 65, 65)',
    paddingHorizontal:25,
    textAlign: 'center'
    
  },
  errorView: {
    
    marginVertical: 25,
    backgroundColor: '#0c0c0c' ,
  }
})