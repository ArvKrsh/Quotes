import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import { getRandomQuote } from '../logic/QuotesUtil';
import Quote from '../models/Quote'

export default function HomeScreen() {

  //var quote: Quote = getRandomQuote();
  var [quote, setQuote] = useState(getRandomQuote());

  function onSwipeLeft() {
      setQuote(getRandomQuote())
  }

  return (
    <View style={styles.container}>
        <GestureRecognizer
            style={styles.card}
            onSwipeLeft={() => onSwipeLeft()}>
                <View style={styles.card_content}>
                    <Text style={styles.card_content_quote}>{quote.text}</Text>
                    <Text style={styles.card_content_author}>- {quote.author}</Text>
                    <StatusBar style="auto" />
                </View>
        </GestureRecognizer>
        <View style={styles.bottom_text}>
            <Text >Swipe right for more...</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#4287f5',
    width: '80%',
    borderRadius: 10,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  card_content: {
    width: '70%',
    alignItems: 'center'
  },
  card_content_quote: {
    textAlign: 'center',
    letterSpacing: 3,
    lineHeight: 35,
    fontSize: 24
  },
  card_content_author: {
    marginTop: 40,
    fontSize: 16
  },
  bottom_text : {
      marginBottom: 100,
      width: '80%',
      borderRadius: 10,
      alignItems: 'flex-end',
      paddingTop:  10,
      paddingRight: 5
  }
});
