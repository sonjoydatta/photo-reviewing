import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex: none;

  & > button {
    position: absolute;
    top: calc(50% - 20px);
    z-index: 2020;
    border: none;
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    &:hover:not(:disabled) {
      background-color: transparent;
    }

    &:first-child {
      left: -20px;
    }

    &:last-child {
      right: -20px;
    }
  }
`;

export const Container = styled.div`
  width: 22.375rem;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
`;

export const SliderItems = styled.div`
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
  will-change: transform;
  white-space: nowrap;
  display: inline-block;
`;

export const SliderItem = styled.div`
  width: 6.25rem;
  height: 3.75rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  flex-direction: row;
  align-items: center;
  display: inline-flex;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
