import { observable, reaction, runInAction } from "mobx";
import storage from "@modules/storage";
import RECORD from "@constants/RECORD";

const recordStore = observable({
  records: [],
  async loadRecords() {
    const loaded = (await storage.read(RECORD.STORAGE_KEY)) ?? [];
    runInAction(() => {
      this.records = loaded;
    });
  },
  addRecord(date, setup, memo) {
    const record = {
      date,
      setup,
      memo,
    };

    this.records = [...this.records, record];
  },
  removeRecord(index) {
    // this.records = [
    //   ...this.records.slice(0, index),
    //   ...this.records.slice(index + 1),
    // ];
    this.records.splice(index, 1);
  },
});

reaction(
  () => recordStore.records,
  (records) => {
    console.log("reaction", records);
    storage.store(RECORD.STORAGE_KEY, records);
  }
);

const useRecordStore = () => {
  return recordStore;
};

export { useRecordStore };
