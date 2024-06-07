import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const SwiperCards = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <ScrollView style={styles.swiperWrapper} horizontal={true}>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Swipe</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>To</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardSwiper]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  swiperWrapper: {
    elevation: 0,
  },
  card: {
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: 100,
    height: 100,
    marginRight: 10,
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowRadius: 3,
  },
  cardSwiper: {
    backgroundColor: '#6c5ce7',
  },
  textColor: {
    color: '#fff',
  },
});
export default SwiperCards;
