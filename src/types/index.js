import { PropTypes } from 'react';

const {
  array,
  number,
  oneOfType,
  shape,
  string,
} = PropTypes;

export const COMMENT = {
  title: string,
  user: string,
  text: string,
};

export const ARTICLE = {
  title: string.isRequired,
  text: string,
};

export const ID = [string, number];