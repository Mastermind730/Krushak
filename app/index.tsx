import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
  FlatList, 
  Image, 
  StatusBar,
  Animated 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from './constants/Colors';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  
  // Animation values for dots
  const scrollX = useRef(new Animated.Value(0)).current;
  
  // Your onboarding data with images
  const slides = [
    {
      id: '1',
      title: 'Connecting Farmers and Traders',
      description: 'Stay updated on top market bids and raise your own product',
      image: require('../assets/images/icon.png'), // Replace with your image paths
    },
    {
      id: '2',
      title: 'Simplified Trading Process',
      description: 'Easily list your products and let the market bid',
      image: require('../assets/images/icon.png'), // Replace with your image paths
    },
    {
      id: '3',
      title: 'Reliable Delivery Services',
      description: 'From farm to market trust in every delivery.Ensuring your grains reach their destination safely.',
      image: require('../assets/images/icon.png'), // Replace with your image paths
    },
  ];
  
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { width }]}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };
  
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };
  
  const isLastSlide = currentIndex === slides.length - 1;

  // Animated pagination dots
  const renderPaginationDots = () => {
    return (
      <View style={styles.pagination}>
        {slides.map((_, i) => {
          // This creates the animation effect as you move between slides
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          
          // Animate the width of the dot
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });
          
          // Animate the opacity to make inactive dots more transparent
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          
          // Animate the color of the dot
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#CCCCCC', '#8E54E9', '#CCCCCC'],
            extrapolate: 'clamp',
          });
          
          // Animate scale for a subtle pop effect
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                  backgroundColor,
                  transform: [{ scale }],
                },
              ]}
            />
          );
        })}
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      
      <LinearGradient
        colors={['#f5f7fa', '#eef2f7']}
        style={styles.background}
      />
      
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />
      
      <View style={styles.footer}>
        {renderPaginationDots()}
        
        {isLastSlide ? (
          <TouchableOpacity 
            style={styles.getStartedButton} 
            onPress={onComplete}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#4776E6', '#8E54E9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onComplete}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.nextButton} 
              onPress={handleNext}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#4776E6', '#8E54E9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientButton}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    borderRadius: 10,
    borderBlockColor: Colors.GRAY
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    marginTop: 60,
    borderRadius: 10,
    borderBlockColor: Colors.GRAY
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    marginTop: 80
    // marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#008000',
    lineHeight: 24,
  },
  footer: {
    marginBottom: 50,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    height: 16, // Fixed height to prevent layout shift during animations
  },
  dot: {
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  skipText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  nextButton: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#8E54E9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  gradientButton: {
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  getStartedButton: {
    borderRadius: 25,
    overflow: 'hidden',
    marginHorizontal: 30,
    elevation: 3,
    shadowColor: '#8E54E9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OnboardingScreen;