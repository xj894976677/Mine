import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <ThemedText type="title" style={styles.greeting}>你好，旅行者</ThemedText>
          </View>
          <View style={styles.avatarContainer}>
            <Image 
              source={{uri: 'https://via.placeholder.com/40'}} 
              style={styles.avatar}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="你想去哪里？"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchButton}>
            <IconSymbol name="magnifyingglass" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, {backgroundColor: '#FFE8D6'}]}>
              <IconSymbol name="star.fill" size={20} color="#FFA451" />
            </View>
            <ThemedText style={styles.categoryText}>最佳景点</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, {backgroundColor: '#E8F4FF'}]}>
              <IconSymbol name="mappin.circle.fill" size={20} color="#5390FF" />
            </View>
            <ThemedText style={styles.categoryText}>签到</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, {backgroundColor: '#FFF0E8'}]}>
              <IconSymbol name="doc.text.fill" size={20} color="#FF8F51" />
            </View>
            <ThemedText style={styles.categoryText}>文章</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, {backgroundColor: '#E8FFE9'}]}>
              <IconSymbol name="tag.fill" size={20} color="#4CAF50" />
            </View>
            <ThemedText style={styles.categoryText}>优惠</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>热门目的地</ThemedText>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.destinationsContainer}
        >
          <TouchableOpacity style={styles.destinationCard}>
            <View style={[styles.destinationImageContainer, {backgroundColor: '#FFE8D6'}]}>
              <Image 
                source={{uri: 'https://via.placeholder.com/150/FFA07A'}} 
                style={styles.destinationImage}
              />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.destinationName}>卡帕多西亚</ThemedText>
            <ThemedText style={styles.destinationLocation}>土耳其</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.destinationCard}>
            <View style={[styles.destinationImageContainer, {backgroundColor: '#E8F4FF'}]}>
              <Image 
                source={{uri: 'https://via.placeholder.com/150/87CEEB'}} 
                style={styles.destinationImage}
              />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.destinationName}>雪兰莪</ThemedText>
            <ThemedText style={styles.destinationLocation}>马来西亚</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.destinationCard}>
            <View style={[styles.destinationImageContainer, {backgroundColor: '#E8FFE9'}]}>
              <Image 
                source={{uri: 'https://via.placeholder.com/150/98FB98'}} 
                style={styles.destinationImage}
              />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.destinationName}>京都</ThemedText>
            <ThemedText style={styles.destinationLocation}>日本</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFE8D6',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  searchButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF8C4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryItem: {
    alignItems: 'center',
    width: '22%',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  destinationsContainer: {
    marginBottom: 20,
  },
  destinationCard: {
    width: 150,
    marginRight: 16,
  },
  destinationImageContainer: {
    width: 150,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  destinationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  destinationName: {
    fontSize: 16,
    marginBottom: 4,
  },
  destinationLocation: {
    fontSize: 14,
    color: '#888',
  },
});
