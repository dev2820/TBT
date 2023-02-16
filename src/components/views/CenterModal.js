import Modal from "react-native-modal";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useViewportStore } from "@store/viewportStore";
import THEME from "@constants/THEME";

const viewport = useViewportStore();

const CenterModal = ({ isVisible, children, onBackdropPress }) => {
  const modalStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 300,
    marginLeft: -150,
    height: viewport.vh > 400 ? 380 : 200,
    marginTop: viewport.vh > 400 ? -190 : -100,
    borderRadius: 30,
    backgroundColor: THEME.SURFACE,
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
      <View style={modalStyle}>{children}</View>
    </Modal>
  );
};

export default observer(CenterModal);
