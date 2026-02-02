import React, { useEffect } from 'react';
import { Platform, ActivityIndicator, Modal, View, StyleSheet, ModalProps } from 'react-native';


interface ActivityModalProps extends ModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({
  title,
  children,
  onClose,
  ...modalProps
}) => {
  return (
    <Modal {...modalProps}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ActivityIndicator color={Platform.OS === 'ios' ? "#ddd" : ''} size="large" />
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000B0',
  },
  modal: {
    width: '50%',
    height: '50%',    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityModal;
