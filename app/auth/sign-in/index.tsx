import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';

// SVG Icons
const backIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 12H5" stroke="#006400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 19L5 12L12 5" stroke="#006400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const helpIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#006400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.09 9.00002C9.3251 8.33169 9.78915 7.76813 10.4 7.40915C11.0108 7.05018 11.7289 6.91896 12.4272 7.03873C13.1255 7.15851 13.7588 7.52154 14.2151 8.06354C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#006400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 17H12.01" stroke="#006400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const logoIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#006400"/>
  <path d="M10 16C10 13.791 11.791 12 14 12H18C20.209 12 22 13.791 22 16V20C22 22.209 20.209 24 18 24H14C11.791 24 10 22.209 10 20V16Z" fill="#8BC34A"/>
  <path d="M14 8L18 8L20 12H12L14 8Z" fill="#8BC34A"/>
</svg>`;

const checkIcon = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="28" fill="#00C800"/>
  <path d="M20 32L28 40L44 24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const AuthScreens = () => {
  const [activeScreen, setActiveScreen] = useState('login'); // login, verify, success
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const otpInputRefs = Array(5).fill(0).map(() => React.createRef());

  // Handle OTP input changes
  const handleOtpChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      
      // Auto focus to next input
      if (text !== '' && index < 4) {
        otpInputRefs[index + 1].current.focus();
      }
    }
  };

  const renderLoginScreen = () => (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <SvgXml xml={backIcon} width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <SvgXml xml={logoIcon} width={32} height={32} />
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <SvgXml xml={helpIcon} width={24} height={24} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.screenTitle}>Log In</Text>
      
      <Image 
      source={require('@/assets/images/farmer_phone.jpg')}
        style={styles.heroImage} 
        resizeMode="cover"
      />
      
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add Your Phone Number</Text>
        <Text style={styles.formSubtitle}>
          Enter your phone number in order to{'\n'}
          Send to you OTP Security code.
        </Text>
        
        <View style={styles.phoneInputContainer}>
          <View style={styles.flagContainer}>
            <Image 
      source={require('@/assets/images/indian_flag.png')}
      style={styles.flagIcon} 
            />
            <Text style={styles.countryCode}>+91</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="000-000-0000"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        
        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsTitle}>YOUR PHONE NUMBER MUST CONTAIN</Text>
          <View style={styles.requirementRow}>
            <View style={styles.bulletPoint} />
            <Text style={styles.requirementText}>An Area Code</Text>
          </View>
          <View style={styles.requirementRow}>
            <View style={styles.bulletPoint} />
            <Text style={styles.requirementText}>Exactly 10 numbers</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => setActiveScreen('verify')}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            I accept the <Text style={styles.termsLink}>Terms and Conditions</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );

  const renderVerifyScreen = () => (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => setActiveScreen('login')}
        >
          <SvgXml xml={backIcon} width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <SvgXml xml={logoIcon} width={32} height={32} />
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <SvgXml xml={helpIcon} width={24} height={24} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.screenTitle}>Verify</Text>
      
      <Image 
      source={require('@/assets/images/farmer_bench.jpg')}
      style={styles.heroImage} 
        resizeMode="cover"
      />
      
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Enter A Verification Code</Text>
        <Text style={styles.formSubtitle}>
          Enter the 5 digit number that we send{'\n'}
          to (+91)- 541-754-3495
        </Text>
        
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={otpInputRefs[index]}
              style={[
                styles.otpInput, 
                index === 0 && styles.activeOtpInput,
                index === 0 && { borderBottomColor: '#00C800' }
              ]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => setActiveScreen('success')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't Receive Anything? <Text style={styles.resendLink}>Resend Code</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );

  const renderSuccessScreen = () => (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => setActiveScreen('verify')}
        >
          <SvgXml xml={backIcon} width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <SvgXml xml={logoIcon} width={32} height={32} />
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <SvgXml xml={helpIcon} width={24} height={24} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.screenTitle}>Verified</Text>
      
      <View style={styles.successContainer}>
        <SvgXml xml={checkIcon} width={120} height={120} />
        
        <Text style={styles.successTitle}>
          Your Account Has be{'\n'}
          Successfully Created
        </Text>
        
        <Text style={styles.successText}>
          Add your personal and market details in the{'\n'}
          profile tab
        </Text>
        
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        
        <View style={styles.helpCenterContainer}>
          <Text style={styles.helpCenterText}>
            Facing any issue? <Text style={styles.helpCenterLink}>Help Center</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );

  switch (activeScreen) {
    case 'login':
      return renderLoginScreen();
    case 'verify':
      return renderVerifyScreen();
    case 'success':
      return renderSuccessScreen();
    default:
      return renderLoginScreen();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop:25,
    paddingVertical: 12,
  },
  iconButton: {
    padding: 8,
  },
  logoContainer: {
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginVertical: 8,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    alignSelf: 'center',
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 24,
    lineHeight: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    height: 50,
    marginBottom: 16,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: '#CCCCCC',
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 4,
  },
  countryCode: {
    fontSize: 16,
    color: '#333333',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  requirementsContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  requirementsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: 8,
  },
  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#666666',
    marginRight: 8,
  },
  requirementText: {
    fontSize: 14,
    color: '#666666',
  },
  primaryButton: {
    backgroundColor: '#00C800',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal:10,
    textAlign:"center",
    width:90,
    color: '#FFFFFF',
  },
  termsContainer: {
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#666666',
  },
  termsLink: {
    fontWeight: 'bold',
    color: '#006400',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
    textAlign: 'center',
    fontSize: 24,
  },
  activeOtpInput: {
    borderBottomWidth: 3,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  resendText: {
    fontSize: 14,
    color: '#666666',
  },
  resendLink: {
    fontWeight: 'bold',
    color: '#006400',
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginVertical: 24,
  },
  successText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 20,
  },
  helpCenterContainer: {
    marginTop: 16,
  },
  helpCenterText: {
    fontSize: 14,
    color: '#666666',
  },
  helpCenterLink: {
    fontWeight: 'bold',
    color: '#006400',
  },
});

export default AuthScreens;