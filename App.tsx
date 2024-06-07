import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatCards from './components/FlatCards.tsx';
import SwiperCards from './components/SwiperCards.tsx';
import FancyCard from './components/FancyCard.tsx';
import BlogCard from './components/BlogCard.tsx';
import ContactList from './components/ContactList.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <SwiperCards />
        <FancyCard />
        <BlogCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default App;
