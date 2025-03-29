import { Colors } from "@/app/constants/Colors";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Login Header */}
      <Text style={styles.header}>Log In</Text>
      <View style={styles.divider} />

      {/* Phone Number Section */}
      <Text style={styles.sectionHeader}>Add Your Phone Number</Text>
      <Text style={styles.description}>
        Enter your phone number in order to Send to you OTP Security code.
      </Text>

      {/* Phone Input */}
      <View style={styles.phoneContainer}>
        <View style={styles.countryCode}>
          <Text style={styles.countryCodeText}>+91</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="1000-000-0000"
          keyboardType="phone-pad"
          maxLength={10}
        />
      </View>

      {/* Requirements */}
      <View style={styles.requirements}>
        <Text style={styles.requirementsText}>YOUR PHONE NUMBER MUST CONTAIN</Text>
        <Text style={styles.requirementItem}>• An Area Code</Text>
        <Text style={styles.requirementItem}>• Exactly 10 numbers</Text>
      </View>

      <View style={styles.divider} />

      {/* Verify Section */}
      <View style={styles.verifySection}>
        <TouchableOpacity style={styles.checkbox}>
          {/* You would add a check icon here */}
        </TouchableOpacity>
        <Text style={styles.verifyText}>
          I accept the <Text style={styles.boldText}>Terms and Conditions</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: Colors.PRIMARY,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.GRAY,
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: Colors.PRIMARY,
  },
  description: {
    fontSize: 14,
    color: Colors.GRAY,
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  countryCode: {
    padding: 15,
    backgroundColor: Colors.GRAY,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  countryCodeText: {
    fontWeight: "500",
  },
  phoneInput: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.GRAY,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  requirements: {
    marginBottom: 20,
  },
  requirementsText: {
    fontWeight: "600",
    marginBottom: 5,
    color: Colors.GRAY,
  },
  requirementItem: {
    marginLeft: 15,
    color: Colors.GRAY,
  },
  verifySection: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    marginRight: 10,
  },
  verifyText: {
    color: Colors.GRAY,
  },
  boldText: {
    fontWeight: "bold",
  },
});