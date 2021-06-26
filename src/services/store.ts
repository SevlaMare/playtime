import AsyncStorage from '@react-native-async-storage/async-storage';

type Params = {
  key: string;
  value: string | object;
};

// TODO let async be handle outside
class Storage {
  static async get({ key }: Params) {
    const data = await AsyncStorage.getItem(key);

    if (!data) {
      return null;
    }

    return typeof data === 'object' ? JSON.parse(data) : data;
  }

  static async set({ key, value }: Params) {
    let data;

    if (typeof value === 'object') {
      data = JSON.stringify(value);
    } else {
      data = value;
    }

    await AsyncStorage.setItem(key, data);
  }

  static async remove({ key }: Params) {
    await AsyncStorage.removeItem(key);
  }

  static async clear() {
    await AsyncStorage.clear();
  }
}

export default Storage;
