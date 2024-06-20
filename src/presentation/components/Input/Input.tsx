import React, {createRef, forwardRef, useEffect, useState} from 'react';

import {ActivityIndicator, TextInput, TextInputProps} from 'react-native';
import {ContainerInput} from './styles';
import {useTheme} from '../../theme/theme';

export interface InputTextProps extends TextInputProps {
  value: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  errorLog?: string;
  multiLine?: boolean;
  variant?: 'text' | 'password' | 'email';
  inputRef?: React.RefObject<TextInput>;
  onBlur?: (item: any) => void;
  handleInputOnFocus?: () => void;
  onSubmitEditing?: (item: any) => void;
  onChange: (item: any) => void;
  isRequired?: boolean;
  inFocus?: boolean;
}

export const Input = forwardRef(
  (
    {
      placeholder,
      errorLog,
      multiLine,
      onBlur,
      handleInputOnFocus,
      onSubmitEditing,
      onChange,
      inputRef,
      value = '',
      variant = 'text',
      inFocus = false,
      disabled = false,
      isRequired = false,
      ...rest
    }: InputTextProps,
    ref,
  ) => {
    // #region [HOOKS]
    const {colors} = useTheme();
    const refInput = inputRef || createRef();
    // #endregion

    // #region [STATES]
    const [isFocused, setIsFocused] = useState(false);
    const [togglePass, setTogglePass] = useState(false);
    // #endregion

    // #region [STATES]
    const handleChangeText = (text: string) => {
      if (onChange && typeof onChange === 'function') onChange(text);
    };
    // #endregion

    // #region [STYLES]
    const getBorderColor = () => {
      if (disabled) return colors.gray[500];
      if (isFocused) return colors.blue[700];
      if (errorLog && errorLog?.length > 0) return colors.action.red;

      return colors.gray[300];
    };

    const borderColor = getBorderColor();
    // #endregion

    // #region [HANDLERS]
    const handleTogglePassword = () => {
      setTogglePass(!togglePass);
    };

    const handleBlur = (val: any) => {
      setIsFocused(false);

      if (onBlur && typeof onBlur === 'function') onBlur(val);
    };

    const handleSubmit = () => {
      if (onSubmitEditing && typeof onSubmitEditing === 'function')
        onSubmitEditing(value);
    };

    const handleOnFocus = () => {
      setIsFocused(true);

      if (handleInputOnFocus && typeof handleInputOnFocus === 'function')
        handleInputOnFocus();
    };
    // #endregion

    useEffect(() => {
      if (inFocus && refInput.current) refInput.current.focus();
    }, [inFocus]);

    return (
      <ContainerInput
        disabled={disabled}
        multiline={multiLine}
        borderColor={borderColor}>
        {variant === 'text' && (
          <Input
            {...rest}
            value={value}
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={handleChangeText}
            multiline={multiLine}
            autoCorrect={false}
            editable={!disabled}
            spellCheck={false}
            onFocus={handleOnFocus}
            onBlur={handleBlur}
            onSubmitEditing={handleSubmit}
            blurOnSubmit
            textAlignVertical={multiLine ? 'top' : undefined}
            keyboardType="default"
            ref={refInput}
          />
        )}

        {variant === 'email' && (
          <Input
            {...rest}
            value={value}
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={handleChangeText}
            multiline={multiLine}
            autoCorrect={false}
            editable={!disabled}
            spellCheck={false}
            onFocus={handleOnFocus}
            onBlur={handleBlur}
            onSubmitEditing={handleSubmit}
            blurOnSubmit
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
            ref={refInput}
          />
        )}

        {variant === 'password' && (
          <>
            <Input
              {...rest}
              value={value}
              placeholder={placeholder}
              autoCapitalize="none"
              onChangeText={handleChangeText}
              multiline={multiLine}
              autoCorrect={false}
              editable={!disabled}
              spellCheck={false}
              secureTextEntry={!togglePass}
              onFocus={handleOnFocus}
              onBlur={handleBlur}
              onSubmitEditing={handleSubmit}
              blurOnSubmit
              autoComplete="password"
              ref={refInput}
            />

            {/* <Icon>
              <IconButton
                icon={{
                  name: iconPassword.icon.name,
                  color: textColor || iconPassword.icon.color,
                  size: iconPassword.icon.size,
                }}
                onPress={iconPassword.onPress}
                transparent
                borderless
              />
            </Icon> */}
          </>
        )}
      </ContainerInput>
    );
  },
);
