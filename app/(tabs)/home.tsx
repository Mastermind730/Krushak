// HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2b7a2b" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search..." 
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.cartIcon}>
          <Feather name="shopping-cart" size={24} color="#fff" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
            style={styles.profileImage} 
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Subhash Palekar</Text>
            <Text style={styles.profileLocation}>Amravati, Maharashtra</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Feather name="plus" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesSection}>
          <TouchableOpacity style={styles.categoryItem}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png' }} 
              style={styles.categoryIcon} 
            />
            <Text style={styles.categoryText}>Seeds and Crops</Text>
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3022/3022131.png' }} 
              style={styles.categoryIcon} 
            />
            <Text style={styles.categoryText}>Organic Fertilizer / Organic</Text>
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Market Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Market</Text>
        </View>

        {/* Market Items */}
        <View style={styles.marketItems}>
          <TouchableOpacity style={styles.marketItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1633690034648-1c264150ee39' }} 
              style={styles.marketItemImage} 
            />
            <View style={styles.marketItemInfo}>
              <Text style={styles.marketItemName}>Pomegranate</Text>
              <Text style={styles.marketItemCategory}>Category: Fruits</Text>
            </View>
            <Text style={styles.marketItemPrice}>₹300/kg</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.marketItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1600623050499-84929aad17c9' }} 
              style={styles.marketItemImage} 
            />
            <View style={styles.marketItemInfo}>
              <Text style={styles.marketItemName}>Onions</Text>
              <Text style={styles.marketItemCategory}>Category: Vegetables</Text>
            </View>
            <Text style={styles.marketItemPrice}>₹20/kg</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.marketItem, styles.orangeItem]}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b' }} 
              style={styles.marketItemImage} 
            />
            <View style={styles.marketItemInfo}>
              <Text style={styles.marketItemName}>Oranges</Text>
              <Text style={styles.marketItemCategory}>Category: Fruits</Text>
            </View>
            <Text style={styles.marketItemPrice}>₹100/kg</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.marketItem, styles.tomatoItem]}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1561136594-7f68413baa99' }} 
              style={styles.marketItemImage} 
            />
            <View style={styles.marketItemInfo}>
              <Text style={styles.marketItemName}>Tomatoes</Text>
              <Text style={styles.marketItemCategory}>Category: Vegetables</Text>
            </View>
            <Text style={styles.marketItemPrice}>₹60/kg</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.seeMoreText}>SEE MORE</Text>

        {/* Orders Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Orders</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* Order Cards */}
        <View style={styles.orderCards}>
          <TouchableOpacity style={styles.orderCard}>
            <View style={styles.orderIconContainer}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/869/869636.png' }} 
                style={styles.orderIcon} 
              />
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.orderTitle}>Your ordered</Text>
              <Text style={styles.orderDetails}>Tomato is ready for delivery</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderCard}>
            <View style={styles.orderIconContainer}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/869/869636.png' }} 
                style={styles.orderIcon} 
              />
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.orderTitle}>Your ordered</Text>
              <Text style={styles.orderDetails}>Tomato is ready for delivery</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.greenOrderCard, { marginTop: 8 }]}>
            <Text style={styles.greenOrderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.greenOrderCard, { marginTop: 8 }]}>
            <Text style={styles.greenOrderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="shopping-bag" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="users" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.homeNavItem]}>
          <Feather name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="grid" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b7a2b',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  cartIcon: {
    marginLeft: 12,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b7a2b',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileLocation: {
    color: '#e0e0e0',
    fontSize: 14,
  },
  followButton: {
    backgroundColor: '#4c9a4c',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  categoryText: {
    flex: 1,
    fontSize: 14,
  },
  badgeContainer: {
    backgroundColor: '#2b7a2b',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#2b7a2b',
    fontSize: 14,
  },
  marketItems: {
    paddingHorizontal: 16,
  },
  marketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  orangeItem: {
    backgroundColor: '#fff2e5',
  },
  tomatoItem: {
    backgroundColor: '#e6f9e6',
  },
  marketItemImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  marketItemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  marketItemName: {
    fontSize: 14,
    fontWeight: '500',
  },
  marketItemCategory: {
    fontSize: 12,
    color: '#888',
  },
  marketItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2b7a2b',
  },
  seeMoreText: {
    textAlign: 'center',
    color: '#2b7a2b',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  orderCards: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  orderIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  orderIcon: {
    width: 24,
    height: 24,
  },
  orderInfo: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  orderDetails: {
    fontSize: 12,
    color: '#888',
  },
  greenOrderCard: {
    backgroundColor: '#e6f9e6',
    borderRadius: 12,
    padding: 16,
  },
  greenOrderText: {
    fontSize: 14,
    color: '#2b7a2b',
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#2b7a2b',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  homeNavItem: {
    width: 40,
    height: 40,
    backgroundColor: '#4c9a4c',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;