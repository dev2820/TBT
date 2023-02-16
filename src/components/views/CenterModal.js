import Modal from "react-native-modal";
import { StyleSheet, View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { useViewportStore } from "@store/viewportStore";

const viewport = useViewportStore();

const CenterModal = ({ isVisible, children, onBackdropPress }) => {
  const modalHeightStyle = {
    height: viewport.vh > 400 ? 380 : 200,
    marginTop: viewport.vh > 400 ? -190 : -100,
  };
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
      <ScrollView style={[styles.modal, modalHeightStyle]}>
        {children}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    width: 300,
    height: 380,
    backgroundColor: "white",
    left: "50%",
    marginLeft: -150,
    top: "50%",
    marginTop: -190,
    borderRadius: 30,
  },
});

export default observer(CenterModal);
