import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get("screen");

const stbh = getStatusBarHeight();

const W = (x: number) => width * x / 100;
const H = (x: number) => height * x / 100

export { stbh, width, height, W, H, }