import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.contactsWrapper} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.contactCard}>
            <Image source={{uri: contact.imageUrl}} style={styles.contactImg} />
            <View>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
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
  contactsWrapper: {},
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#424242',
    paddingVertical: 15,
  },
  contactImg: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  contactName: {
    fontWeight: '600',
    color: '#000',
    fontSize: 16,
    marginBottom: 3,
  },
  contactStatus: {
    color: '#747171',
  },
});
export default ContactList;
