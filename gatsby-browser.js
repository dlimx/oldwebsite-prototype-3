/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';

// custom typefaces
import 'typeface-fira-sans';

import './src/theme/fonts/fonts.css';
import styles from './src/theme/theme.scss';

import { WindowProvider } from './src/context/WindowContext';

/* eslint-disable */
export const wrapRootElement = ({ element }) => (
  <WindowProvider>{element}</WindowProvider>
);

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
  getSavedScrollPosition,
}) => {
  if (
    routerProps.location.action === 'POP' ||
    routerProps.location.href === prevRouterProps.location.href
  ) {
    return true;
  }

  const prevPosition = getSavedScrollPosition(prevRouterProps.location);
  const currentPosition = getSavedScrollPosition(routerProps.location);

  const position = currentPosition || prevPosition;

  if (
    window.innerWidth &&
    window.innerWidth >= styles.mdValue &&
    (position || window.pageYOffset)
  ) {
    const prevX = position ? position[0] : 0;
    const prevY = window.pageYOffset;

    const offset = Number.parseInt(styles.headerPaddingValue, 10);

    const y = prevY > offset ? offset : prevY;

    window.scrollTo(prevX, y);

    return false;
  }

  return true;
};
