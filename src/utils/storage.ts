import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    size: 99,
    storageBackend: AsyncStorage,
    defaultExpires: null,
});

export const getAsyncData = async <T>({ key= "" }: { key: string}): Promise<T> => {
    const value = await storage.load({ key })
    return value;
}

export const setAsyncData = async <T>({ key=  "", data }: { key: string, data: T}) => {
    const x = await storage.save({ key, data });
}