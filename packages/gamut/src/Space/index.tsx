import React from 'react';
import cx from 'classnames';

export type GamutSpacing = 1 | 2 | 3 | 4 | 5 | 6;

export type SpaceProps = {
  as?: React.ReactType;
  p?: GamutSpacing;
  pt?: GamutSpacing;
  pb?: GamutSpacing;
  pl?: GamutSpacing;
  pr?: GamutSpacing;
  px?: GamutSpacing;
  py?: GamutSpacing;
  m?: GamutSpacing;
  mt?: GamutSpacing;
  mb?: GamutSpacing;
  ml?: GamutSpacing;
  mr?: GamutSpacing;
  mx?: GamutSpacing;
  my?: GamutSpacing;
  className?: string;
};

const spacingProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];

const spacingClasses = (props: Partial<SpaceProps>) => {
  return spacingProps
    .map((prop: string) => (props[prop] ? `${prop}_${props[prop]}` : null))
    .filter(Boolean);
};

const Space: React.FC<SpaceProps> = ({ as, className, children, ...rest }) => {
  const El = as || 'div';
  const classes = cx(...spacingClasses(rest), className);
  return <El className={classes}>{children}</El>;
};

export default Space;
