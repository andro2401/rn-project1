import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FancyCard = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/14375296/pexels-photo-14375296.jpeg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Athenian Acropolis</Text>
          <Text style={styles.cardLabel}>Athens</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            doloribus est inventore ipsam maxime. Beatae culpa fugiat iusto
            molestias quibusdam!
          </Text>
          <Text style={styles.cardFooter}>21 mins away</Text>
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
  card: {
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLabel: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    color: '#242b2e',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 5,
  },
  cardFooter: {
    color: '#000',
    fontSize: 14,
  },
});
export default FancyCard;
