// DetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2b7a2b" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.headerDetail}>
        <Text style={styles.headerTitle}>FARMS</Text>
        <View style={styles.searchContainerSmall}>
          <Feather name="search" size={18} color="#888" />
        </View>
        <TouchableOpacity style={styles.notifButton}>
          <Feather name="bell" size={18} color="#2b7a2b" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Weather Card */}
        <View style={styles.weatherCard}>
          <Text style={styles.weatherDegree}>22</Text>
          <View style={styles.weatherInfo}>
            <Text style={styles.weatherStatus}>Sunny</Text>
            <Text style={styles.weatherLocation}>Pune</Text>
          </View>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9841/9841635.png' }} 
            style={styles.weatherIcon} 
          />
        </View>

        {/* Market Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Market</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* Market Items */}
        <View style={styles.detailMarketItems}>
          <TouchableOpacity style={styles.detailMarketItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1633690034648-1c264150ee39' }} 
              style={styles.detailMarketImage} 
            />
            <View style={styles.detailMarketInfo}>
              <Text style={styles.detailMarketName}>Pomegranate</Text>
              <Text style={styles.detailMarketCategory}>Category: Fruits</Text>
            </View>
            <Text style={styles.detailMarketPrice}>₹300/kg</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.detailMarketItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1600623050499-84929aad17c9' }} 
              style={styles.detailMarketImage} 
            />
            <View style={styles.detailMarketInfo}>
              <Text style={styles.detailMarketName}>Onions</Text>
              <Text style={styles.detailMarketCategory}>Category: Vegetables</Text>
            </View>
            <Text style={styles.detailMarketPrice}>₹20/kg</Text>
          </TouchableOpacity>
        </View>

        {/* Orders Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Orders</Text>
        </View>

        {/* Order Cards - Detail View */}
        <View style={styles.detailOrders}>
          <View style={styles.orderRow}>
            <TouchableOpacity style={styles.blueOrderCard}>
              <View style={styles.blueOrderIconContainer}>
                <Feather name="truck" size={24} color="#fff" />
              </View>
              <Text style={styles.blueOrderTitle}>Order Created</Text>
              <Text style={styles.blueOrderDesc}>Your order has been created</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.purpleOrderCard}>
              <View style={styles.purpleOrderIconContainer}>
                <Feather name="check-circle" size={24} color="#fff" />
              </View>
              <Text style={styles.purpleOrderTitle}>Order Confirmed</Text>
              <Text style={styles.purpleOrderDesc}>Your order has been confirmed</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.orderRow}>
            <TouchableOpacity style={styles.greenOrderCardLarge}>
              <View style={styles.greenOrderIconContainer}>
                <Feather name="box" size={24} color="#fff" />
              </View>
              <Text style={styles.greenOrderTitle}>Order Packed</Text>
              <Text style={styles.greenOrderDesc}>Your order has been packed and waiting for delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lightGreenOrderCard}>
              <View style={styles.lightGreenOrderIconContainer}>
                <Feather name="activity" size={24} color="#fff" />
              </View>
              <Text style={styles.lightGreenOrderTitle}>In Transit</Text>
              <Text style={styles.lightGreenOrderDesc}>Keep eye on your order</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.orderRow}>
            <TouchableOpacity style={styles.yellowOrderCard}>
              <View style={styles.yellowOrderIconContainer}>
                <Feather name="home" size={24} color="#fff" />
              </View>
              <Text style={styles.yellowOrderTitle}>Delivered</Text>
              <Text style={styles.yellowOrderDesc}>Package has been delivered</Text>
            </TouchableOpacity>
          </View>
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
  headerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b7a2b',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainerSmall: {
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notifButton: {
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginTop: 12,
  },
  weatherDegree: {
    fontSize: 48,
    fontWeight: 'bold',
    marginRight: 16,
  },
  weatherInfo: {
    flex: 1,
  },
  weatherStatus: {
    fontSize: 16,
    fontWeight: '500',
  },
  weatherLocation: {
    fontSize: 14,
    color: '#888',
  },
  weatherIcon: {
    width: 48,
    height: 48,
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
  detailMarketItems: {
    paddingHorizontal: 16,
  },
  detailMarketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  detailMarketImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  detailMarketInfo: {
    flex: 1,
    marginLeft: 12,
  },
  detailMarketName: {
    fontSize: 14,
    fontWeight: '500',
  },
  detailMarketCategory: {
    fontSize: 12,
    color: '#888',
  },
  detailMarketPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2b7a2b',
  },
  detailOrders: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  blueOrderCard: {
    flex: 1,
    backgroundColor: '#e6f0ff',
    borderRadius: 12,
    padding: 12,
    marginRight: 4,
  },
  blueOrderIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#4285f4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  blueOrderTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  blueOrderDesc: {
    fontSize: 12,
    color: '#666',
  },
  purpleOrderCard: {
    flex: 1,
    backgroundColor: '#f0e6ff',
    borderRadius: 12,
    padding: 12,
    marginLeft: 4,
  },
  purpleOrderIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#9c27b0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  purpleOrderTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  purpleOrderDesc: {
    fontSize: 12,
    color: '#666',
  },
  greenOrderCardLarge: {
    flex: 1,
    backgroundColor: '#e6f9e6',
    borderRadius: 12,
    padding: 12,
    marginRight: 4,
  },
  greenOrderIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#4caf50',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  greenOrderTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  greenOrderDesc: {
    fontSize: 12,
    color: '#666',
  },
  lightGreenOrderCard: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 12,
    marginLeft: 4,
  },
  lightGreenOrderIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#8bc34a',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  lightGreenOrderTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  lightGreenOrderDesc: {
    fontSize: 12,
    color: '#666',
  },
  yellowOrderCard: {
    flex: 1,
    backgroundColor: '#fff8e1',
    borderRadius: 12,
    padding: 12,
    marginRight: 4,
  },
  yellowOrderIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#ffc107',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  yellowOrderTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  yellowOrderDesc: {
    fontSize: 12,
    color: '#666',
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

export default DetailScreen;