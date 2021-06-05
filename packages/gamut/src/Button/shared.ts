import {
  ColorModes,
  modeColorProps,
  styledConfig,
  system,
  transitionConcat,
} from '@codecademy/gamut-styles';
import {
  CSSObject,
  StyleProps,
  ThemeProps,
  variance,
} from '@codecademy/variance';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { ButtonBase } from '../ButtonBase/ButtonBase';

export const config = styledConfig(['size', 'variant']);

export const buttonProps = variance.compose(
  system.layout,
  system.positioning,
  system.margin
);

export const templateVariants = <Variant extends string, Styles>(
  variants: ReadonlyArray<Variant>,
  template: (colors: Variant) => Styles
) => {
  const variantConfig = {} as Record<Variant, ReturnType<typeof template>>;
  variants.forEach((key: Variant) => {
    variantConfig[key] = template(key);
  });
  return system.variant({
    defaultVariant: variants[0],
    variants: variantConfig,
  });
};

export const buttonVariants = ['primary', 'secondary', 'danger'] as const;

export enum ButtonSelectors {
  OUTLINE = '&:before',
  OUTLINE_FOCUS = '&:focus-visible:before',
  HOVER = '&:hover',
  ACTIVE = '&:active',
  FOCUS = ' &:focus-visible',
  DISABLED = "&:disabled, &[aria-disabled='true']",
}

export const buttonStyles = system.css({
  position: 'relative',
  fontWeight: 'title',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 2,
  borderRadius: '4px',
  borderColor: 'transparent',
  transition: transitionConcat(
    ['border-color', 'color', 'background-color', 'box-shadow'],
    'fast',
    'ease-in'
  ),
  '&:focus': {
    outline: 'none',
  },
  [ButtonSelectors.DISABLED]: {
    cursor: 'not-allowed',
    userSelect: 'none',
  },
  [ButtonSelectors.OUTLINE]: {
    content: '""',
    transition: transitionConcat(['opacity'], 'fast'),
    position: 'absolute',
    borderRadius: '6px',
    border: 2,
    inset: -5,
    opacity: 0,
    zIndex: 0,
  },
  [ButtonSelectors.OUTLINE_FOCUS]: {
    opacity: 1,
  },
});

export interface ButtonProps
  extends ComponentProps<typeof ButtonBase>,
    StyleProps<typeof buttonProps> {
  variant?: typeof buttonVariants[number];
  size?: 'normal' | 'small';
  as?: never;
  mode?: ColorModes;
}

export const createButtonComponent = <P>(
  ...args: (<T extends ThemeProps>(props: T) => CSSObject)[]
) =>
  styled(ButtonBase, config)<ButtonProps & P>(
    modeColorProps,
    buttonStyles,
    ...args,
    buttonProps
  );
