import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const FlatCards = (): React.JSX.Element => {
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.wrapper}>
        <View style={[styles.card, styles.redCard]}>
          <Text style={styles.textColor}>RED</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text style={styles.textColor}>GREEN</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.textColor}>BLUE</Text>
        </View>
      </View>
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
  wrapper: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  card: {
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: 100,
    height: 100,
  },
  redCard: {
    backgroundColor: '#ef5354',
  },
  greenCard: {
    backgroundColor: '#00b894',
  },
  blueCard: {
    backgroundColor: '#0984e3',
  },
  textColor: {
    color: '#fff',
  },
});
export default FlatCards;
