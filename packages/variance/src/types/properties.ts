import { Globals, StandardProperties } from 'csstype';

type ColorProperties = {
  [K in keyof StandardProperties as `${K extends 'color' | `${string}Color`
    ? K
    : never}`]:
    | Extract<StandardProperties[K], Globals>
    | 'currentColor'
    | (string & {});
};

type WidthProperties = 'width' | `${string}Width`;
type HeightProperties = 'height' | `${string}Height`;
type InsetProperties = 'left' | 'right' | 'top' | 'bottom' | 'inset';

type NumberSyntax = WidthProperties | HeightProperties | InsetProperties;

type DimensionProperties = {
  [K in keyof StandardProperties as `${K extends NumberSyntax ? K : never}`]:
    | StandardProperties[K]
    | (number & {});
};

export interface PropertyTypes<Overrides = never>
  extends Omit<
      StandardProperties<Overrides>,
      keyof ColorProperties | keyof DimensionProperties
    >,
    ColorProperties,
    DimensionProperties {}
