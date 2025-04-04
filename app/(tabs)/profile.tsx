import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const ProfileScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width;
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <LinearGradient
        colors={['#4CAF50', '#2E7D32']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.placeholder} />
      </LinearGradient>

      <View style={styles.profileCard}>
        <LinearGradient
          colors={['rgba(76, 175, 80, 0.8)', 'rgba(46, 125, 50, 0.9)']}
          style={styles.profileGradient}
        >
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/images/profile_placeholder.png')}
              style={styles.profileImage}
            />
            <View style={styles.callIconContainer}>
              <Ionicons name="call" size={18} color="white" />
            </View>
          </View>
        </LinearGradient>
        
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>ABC</Text>
          <Text style={styles.profileStatus}>Online</Text>
          <TouchableOpacity style={styles.editButton} onPress={()=>router.push("/(tabs)/edit_profile")}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        <MenuItem
          icon={<Feather name="user" size={22} color="#444" />}
          title="Account"
          subtitle="Security, change number"
        />
        <MenuItem
          icon={<Feather name="lock" size={22} color="#444" />}
          title="Privacy"
          subtitle="Block contacts, disappearing messages"
        />
        <MenuItem
          icon={<Feather name="bell" size={22} color="#444" />}
          title="Notifications"
          subtitle="Messages, group & call tones"
        />
        <MenuItem
          icon={<Feather name="hard-drive" size={22} color="#444" />}
          title="Storage"
          subtitle="Network usage, auto-download"
        />
        <MenuItem
          icon={<Feather name="globe" size={22} color="#444" />}
          title="Language"
          subtitle="English (US)"
        />
        <MenuItem
          icon={<Feather name="help-circle" size={22} color="#444" />}
          title="Help"
          subtitle="Help center, contact us, privacy policy"
        />
        <MenuItem
          icon={<Feather name="refresh-cw" size={22} color="#444" />}
          title="Updates"
          subtitle="Check for new updates"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIconContainer}>
        {icon}
      </View>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop:16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  placeholder: {
    width: 40,
  },
  profileCard: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: -2,
    borderRadius: 6,
    width:'95%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    paddingBottom: 20,
  },
  profileGradient: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: 'white',
  },
  callIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 6,
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  profileInfo: {
    alignItems: 'center',
    paddingTop: 10,
  },
  profileName: {
    color: '#333',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  profileStatus: {
    color: '#4CAF50',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 14,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  editButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  menuContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 3,
  },
});

export default ProfileScreen;