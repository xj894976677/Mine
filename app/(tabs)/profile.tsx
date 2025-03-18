import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol, IconSymbolName } from '@/components/ui/IconSymbol';

interface MenuItemProps {
  icon: IconSymbolName;
  title: string;
  subtitle?: string;
  rightIcon?: IconSymbolName;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, subtitle, rightIcon = 'chevron.right' }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuIconContainer}>
      <IconSymbol name={icon} size={22} color="#FF8C4B" />
    </View>
    <View style={styles.menuTextContainer}>
      <ThemedText style={styles.menuTitle}>{title}</ThemedText>
      {subtitle && <ThemedText style={styles.menuSubtitle}>{subtitle}</ThemedText>}
    </View>
    <IconSymbol name={rightIcon} size={16} color="#CCC" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image 
              source={{uri: 'https://via.placeholder.com/100'}} 
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <ThemedText type="title" style={styles.userName}>旅行者</ThemedText>
              <ThemedText style={styles.userEmail}>traveler@example.com</ThemedText>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <ThemedText style={styles.editButtonText}>编辑</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statNumber}>12</ThemedText>
            <ThemedText style={styles.statLabel}>已访问</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statNumber}>24</ThemedText>
            <ThemedText style={styles.statLabel}>收藏</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold" style={styles.statNumber}>5</ThemedText>
            <ThemedText style={styles.statLabel}>评论</ThemedText>
          </View>
        </View>

        <View style={styles.menuSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>我的账户</ThemedText>
          <MenuItem 
            icon="person.circle.fill" 
            title="个人信息" 
          />
          <MenuItem 
            icon="bell.fill" 
            title="通知" 
            subtitle="5条未读通知"
          />
          <MenuItem 
            icon="creditcard.fill" 
            title="支付方式" 
          />
          <MenuItem 
            icon="location.fill" 
            title="地址管理" 
          />
        </View>

        <View style={styles.menuSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>应用设置</ThemedText>
          <MenuItem 
            icon="globe" 
            title="语言" 
            subtitle="简体中文"
          />
          <MenuItem 
            icon="moon.fill" 
            title="深色模式" 
            rightIcon="switch.2"
          />
          <MenuItem 
            icon="bell.slash.fill" 
            title="免打扰模式" 
            rightIcon="switch.2"
          />
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <ThemedText style={styles.logoutText}>退出登录</ThemedText>
        </TouchableOpacity>
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
    marginBottom: 30,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#555',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FF8C4B',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#EFEFEF',
  },
  menuSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 140, 75, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#888',
  },
  logoutButton: {
    backgroundColor: '#FFE8E8',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  logoutText: {
    color: '#FF4D4D',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 