import React from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";

const CustomInput = ({
  placeholder,
  secureTextEntry,
  control,
  name,
  passwordIcon,
  showPassword,
  setShowPassword,
  rules = {}
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState:{ error } }) => (
        <View style={styles.inputComponent}>
          <View style={styles.inputContainer}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry && !showPassword}
              style={styles.textInput}
            />
            {passwordIcon && (
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={26}
                color={THEME.colors.darkgray}
                onPress={() => setShowPassword(!showPassword)}
              />
            )}
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.textError}>{error?.message || ""}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default CustomInput;
