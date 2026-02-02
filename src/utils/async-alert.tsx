import { Alert, AlertButton, AlertOptions } from 'react-native';

export async function AsyncAlert(title: string, message: string, buttons?: AlertButton[], options?: AlertOptions) {
  return new Promise((resolve, reject) => {
    if (buttons == null)
        buttons = [{ text: 'OK', style: 'default' }];

    // Modify the buttons to include the resolve function in their onPress handlers
    const asyncButtons = buttons.map((button, index) => {
      const originalOnPress = button.onPress;
      return {
        ...button,
        onPress: () => {
          if (originalOnPress) {
            originalOnPress();
          }
          // Resolve the promise with the index of the button pressed
          resolve(index);
        },
      };
    });

    const asyncOnDimiss = () => {
        options?.onDismiss?.();
        console.log('testing');
        resolve(-1);
    };

    Alert.alert(title, message, asyncButtons, {
        cancelable: options?.cancelable ?? true,
        userInterfaceStyle: options?.userInterfaceStyle,
        onDismiss: asyncOnDimiss,
    });
  });
};