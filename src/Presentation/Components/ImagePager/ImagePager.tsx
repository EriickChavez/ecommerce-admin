import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  ScrollView,
  ImageStyle,
  StyleProp,
  LayoutChangeEvent,
} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {ThemeEntry} from '../../../@Types/theme';
import ImageView from '../ImageView/ImageView';

interface ImagePagerProps {
  images: string[];
  theme?: ThemeEntry;
  imageStyles?: StyleProp<ImageStyle>;
}
export interface PagerRef {
  next: () => void;
  back: () => void;
}

const ImagePager: React.FC<ImagePagerProps> = ({images = [], imageStyles}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(0);

  // const {width} = Dimensions.get('window');
  const pagerRef = React.createRef<ScrollView>();

  const handlePageChange = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(offsetX / width);
    setCurrentPage(newIndex);
  };
  const opacity = useCallback(
    (index: number) => (index === currentPage ? 1 : 0.5),
    [currentPage],
  );
  const hasMultipleImage = useMemo(() => images.length > 1, [images]);

  const onLayoutScroll = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  return (
    <View>
      <ScrollView
        horizontal
        ref={pagerRef}
        pagingEnabled
        onLayout={onLayoutScroll}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handlePageChange}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <ImageView
              key={index}
              imageProps={{
                source: {uri: image},
                // @ts-ignore
                style: [styles.image, imageStyles, {width}],
                resizeMode: FastImage.resizeMode.contain,
              }}
            />
          </View>
        ))}
      </ScrollView>
      {hasMultipleImage && (
        <View style={styles.pagination}>
          {images.map((_, idx) => (
            <View
              key={idx}
              style={[styles.paginationDot, {opacity: opacity(idx)}]}
            />
          ))}
        </View>
      )}
    </View>
  );
};
export default ImagePager;
