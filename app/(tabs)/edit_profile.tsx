import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';

const ProfileEditScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState<string>();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const growAnim = useRef(new Animated.Value(0.95)).current;
  
  const leafPosition1 = useRef(new Animated.Value(0)).current;
  const leafPosition2 = useRef(new Animated.Value(0)).current;
  
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
    
    animateLeaves();
  }, []);

  const animateLeaves = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(leafPosition1, {
          toValue: 10,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(leafPosition1, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(leafPosition2, {
          toValue: -10,
          duration: 2300,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(leafPosition2, {
          toValue: 0,
          duration: 2300,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(growAnim, {
        toValue: 1.05,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(growAnim, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleUpdate = () => {
    animateButton();
    console.log('Profile updated:', formData);
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.bgLeaf1, { transform: [{ translateY: leafPosition1 }] }]}>
        <FontAwesome5 name="leaf" size={80} color="rgba(76, 175, 80, 0.1)" />
      </Animated.View>
      
      <Animated.View style={[styles.bgLeaf2, { transform: [{ translateY: leafPosition2 }] }]}>
        <FontAwesome5 name="seedling" size={100} color="rgba(76, 175, 80, 0.1)" />
      </Animated.View>
      
      <LinearGradient
        colors={['#4CAF50', '#388E3C']}
        style={styles.header}
      >
        <TouchableOpacity 
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={()=>router.push("/(tabs)/profile")}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        
        <Animated.View 
          style={[styles.sunIcon, { transform: [{ rotate: spin }] }]}
        >
          <FontAwesome5 name="sun" size={24} color="#FFD700" />
        </Animated.View>
      </LinearGradient>

      <Animated.View 
        style={[
          styles.formContainer,
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <TouchableOpacity 
          style={styles.profileImageContainer} 
          onPress={pickImage}
          activeOpacity={0.8}
        >
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image 
              source={require('../../assets/images/profile_placeholder.png')} 
              style={styles.profileImage} 
            />
          )}
          <View style={styles.editIconContainer}>
            <MaterialIcons name="edit" size={18} color="white" />
          </View>
          <LottieView
            source={require('./green-circle-animation.json')} // Replace with your Lottie animation file
            style={styles.profileLottie}
            autoPlay
            loop
          />
        </TouchableOpacity>

        <View style={styles.inputGroupContainer}>
          <View style={styles.inputGroup}>
            <FontAwesome5 name="user" size={20} color="#388E3C" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.username}
              onChangeText={(text) => handleInputChange('username', text)}
              placeholder="Username"
              placeholderTextColor="#AAA"
            />
          </View>

          <View style={styles.inputGroup}>
            <MaterialIcons name="email" size={20} color="#388E3C" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              placeholder="Email ID"
              placeholderTextColor="#AAA"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <FontAwesome5 name="phone" size={20} color="#388E3C" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.phoneNumber}
              onChangeText={(text) => handleInputChange('phoneNumber', text)}
              placeholder="Phone Number"
              placeholderTextColor="#AAA"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <FontAwesome5 name="lock" size={20} color="#388E3C" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.password}
              onChangeText={(text) => handleInputChange('password', text)}
              placeholder="Password"
              placeholderTextColor="#AAA"
              secureTextEntry
            />
          </View>
        </View>

        <Animated.View style={{ transform: [{ scale: growAnim }] }}>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdate}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#388E3C', '#2E7D32']}
              style={styles.gradient}
            >
              <Text style={styles.updateButtonText}>Update</Text>
              <MaterialIcons name="check-circle" size={18} color="white" style={styles.buttonIcon} />
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      
      {/* Agricultural decoration at bottom */}
      <View style={styles.bottomDecoration}>
        <LottieView
          source={require('./plant-growing-animation.json')} 
          style={styles.plantAnimation}
          autoPlay
          loop
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 120,
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    padding: 8,
    marginBottom:14
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom:14
  },
  sunIcon: {
    position: 'absolute',
    right: 20,
    top: 45,
    marginTop:15
  },
  formContainer: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    marginTop: -10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
  },
  profileImageContainer: {
    marginTop: -50,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    position: 'relative',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileLottie: {
    position: 'absolute',
    width: 140,
    height: 140,
    zIndex: -1,
  },
  inputGroupContainer: {
    width: '100%',
    marginTop: 30,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    width: 200,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#388E3C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  gradient: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  bgLeaf1: {
    position: 'absolute',
    top: 100,
    right: 20,
    opacity: 0.7,
    zIndex: -1,
  },
  bgLeaf2: {
    position: 'absolute',
    bottom: 80,
    left: 10,
    opacity: 0.7,
    zIndex: -1,
  },
  bottomDecoration: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  plantAnimation: {
    width: 150,
    height: 100,
  },
});

export default ProfileEditScreen;