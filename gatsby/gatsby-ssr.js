/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

// Adds a class name to the body element
// eslint-disable-next-line no-unused-vars
export const onRenderBody = (
  { setBodyAttributes, setHtmlAttributes },
  pluginOptions
) => {
  setBodyAttributes({
    className: 'slick-slice-dev-team',
  });
  setHtmlAttributes({
    className: 'oluwasetemi',
  });
};

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
