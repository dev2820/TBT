import Modal from "react-native-modal";
import { StyleSheet, View } from "react-native";

const CenterModal = ({ isVisible, children, onBackdropPress }) => {
  return (
    <Modal
      isVisible={isVisible}
      coverScreen={true}
      animationIn="fadeIn"
      animationInTiming={200}
      backdropTransitionInTiming={0}
      animationOut="fadeOut"
      backdropTransitionOutTiming={0}
      animationOutTiming={200}
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.modalView}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    width: 300,
    height: 360,
    backgroundColor: "white",
    left: "50%",
    marginLeft: -150,
    top: "50%",
    marginTop: -180,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default CenterModal;
