import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BlogCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.cardHeading}>What's new in Next.js</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            corporis dolorem doloribus in, porro rerum tempore. Aliquam animi
            hic in, itaque laborum laudantium molestiae nostrum sit suscipit
            totam. Eos inventore laborum nihil non officia saepe velit
            voluptate? Beatae, consectetur deserunt ea ipsam ipsum
            necessitatibus nulla rem, sapiente, sequi ut veritatis.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.visitgreece.gr/mainland/attica/athens/')
            }>
            <Text style={styles.cardLink}>Read more ...</Text>
          </TouchableOpacity>
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
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  elevatedCard: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  cardImage: {
    height: 150,
  },
  cardBody: {
    padding: 10,
  },
  cardFooter: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLink: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#175AA4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
export default BlogCard;
