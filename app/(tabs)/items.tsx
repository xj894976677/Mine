import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface ItemType {
  id: string;
  name: string;
  location: string;
  distance: string;
  image: string;
  price: string;
}

const items: ItemType[] = [
  {
    id: '1',
    name: '风车门票',
    location: '京奇兰森佳',
    distance: '4 km',
    image: 'https://via.placeholder.com/150/FF9966',
    price: '￥120'
  },
  {
    id: '2',
    name: '博物馆门票',
    location: '约格亚卡尔塔',
    distance: '7 km',
    image: 'https://via.placeholder.com/150/B19CD9',
    price: '￥80'
  },
  {
    id: '3',
    name: '海滩一日游',
    location: '峇厘岛',
    distance: '18 km',
    image: 'https://via.placeholder.com/150/87CEEB',
    price: '￥250'
  },
  {
    id: '4',
    name: '风景区套票',
    location: '京都',
    distance: '23 km',
    image: 'https://via.placeholder.com/150/98FB98',
    price: '￥180'
  },
];

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => (
  <TouchableOpacity style={styles.itemCard}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.priceTag}>
        <ThemedText style={styles.priceText}>{item.price}</ThemedText>
      </View>
    </View>
    <View style={styles.itemInfo}>
      <ThemedText type="defaultSemiBold" style={styles.itemName}>{item.name}</ThemedText>
      <View style={styles.locationRow}>
        <IconSymbol name="mappin" size={14} color="#888" />
        <ThemedText style={styles.locationText}>{item.location}</ThemedText>
      </View>
      <View style={styles.distanceRow}>
        <IconSymbol name="location.circle" size={14} color="#888" />
        <ThemedText style={styles.distanceText}>{item.distance}</ThemedText>
      </View>
    </View>
  </TouchableOpacity>
);

export default function ItemsScreen() {
  const [activeTab, setActiveTab] = React.useState('all');
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>物品浏览</ThemedText>
        <TouchableOpacity style={styles.filterButton}>
          <IconSymbol name="slider.horizontal.3" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchBar}>
        <IconSymbol name="magnifyingglass" size={18} color="#888" />
        <ThemedText style={styles.searchText}>搜索物品...</ThemedText>
      </View>
      
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>全部</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'tickets' && styles.activeTab]}
          onPress={() => setActiveTab('tickets')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'tickets' && styles.activeTabText]}>门票</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'tours' && styles.activeTab]}
          onPress={() => setActiveTab('tours')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'tours' && styles.activeTabText]}>一日游</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'packages' && styles.activeTab]}
          onPress={() => setActiveTab('packages')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'packages' && styles.activeTabText]}>套票</ThemedText>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.itemsList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  searchText: {
    marginLeft: 10,
    color: '#888',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  activeTab: {
    backgroundColor: '#FF8C4B',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  itemsList: {
    paddingBottom: 20,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 100,
    height: 100,
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  priceTag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 140, 75, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 10,
  },
  priceText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  locationText: {
    fontSize: 13,
    color: '#888',
    marginLeft: 5,
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 13,
    color: '#888',
    marginLeft: 5,
  },
}); 