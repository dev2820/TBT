import { observable } from "mobx";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

const viewportStore = observable({
  vw: window.width,
  vh: window.height,
  setVw(newVw) {
    this.vw = newVw;
  },
  setVh(newVh) {
    this.vh = newVh;
  },
});

Dimensions.addEventListener("change", (e) => {
  viewportStore.setVw(e.window.width);
  viewportStore.setVh(e.window.height);
});

const useViewportStore = () => {
  return viewportStore;
};

export { useViewportStore };
