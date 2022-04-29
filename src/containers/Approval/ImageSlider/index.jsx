import { Image } from '@/components';
import PropTypes from 'prop-types';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Navigation } from './Navigation';
import { Container, SliderItem, SliderItems, SliderWrapper } from './styles';

export const ImageSlider = ({ images }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [slideItems, setSlideItems] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const sliderItemsRef = useRef(null);

  useEffect(() => {
    if (sliderItemsRef.current?.children?.length) {
      setActiveItem(1);
      setSlideItems(sliderItemsRef.current.children.length);
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (activeItem > 1) {
      setCurrentPosition(currentPosition + 118);
      setActiveItem(activeItem - 1);
    }
  }, [activeItem, currentPosition]);

  const handleNext = useCallback(() => {
    if (activeItem < slideItems) {
      setCurrentPosition(currentPosition - 118);
      setActiveItem(activeItem + 1);
    }
  }, [activeItem, currentPosition, slideItems]);

  if (!images.length) {
    return null;
  }

  return (
    <SliderWrapper>
      <Navigation
        onPrev={handlePrev}
        onNext={handleNext}
        isPrevDisabled={activeItem > 1}
        isNextDisabled={activeItem < slideItems - 2}
      >
        <Container>
          <SliderItems ref={sliderItemsRef} style={{ transform: `translateX(${currentPosition}px)` }}>
            {images.map(({ id, description, urls }) => (
              <SliderItem key={id}>
                <Image src={urls.small} alt={description ?? ''} />
              </SliderItem>
            ))}
          </SliderItems>
        </Container>
      </Navigation>
    </SliderWrapper>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string,
      urls: PropTypes.shape({
        thumb: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export const ImageSliderMemo = memo(ImageSlider);
