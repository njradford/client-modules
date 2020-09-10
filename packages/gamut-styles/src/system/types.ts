import { SerializedStyles } from '@emotion/core';
import { Styles } from 'polished/lib/types/style';
import { PropAlias } from './constants';

/** System Configuration */
export type ResponsiveProp<T> = {
  xs: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type OptionalResponiveProp<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

/** Utility  */
export type NeverUnknown<T> = T extends string
  ? T
  : T extends number
  ? T
  : T extends unknown
  ? never
  : T;

export type SafeLookup<T> = T extends ScaleShape ? T[number] : never;
export type SafeMapKey<T> = T extends ScaleMap ? keyof T : never;

/** Abstract Configurations  */
export type AnyStyle = SerializedStyles | Styles | string;

export type AbstractTheme = Readonly<Partial<Record<string, ScaleShape>>>;

export type PropTemplateType = 'standard' | 'directional';

export type ScaleShape = Readonly<unknown[]>;

export type ScaleMap = Readonly<Record<string, unknown>>;

export type AbstractScales = ScaleShape | ScaleMap | Readonly<string>;
export type AbstractScales = ScaleShape | ScaleMap | Readonly<string>;

export type AbstractProps = Record<string, unknown>;

export type StyleTemplate<T extends AbstractProps> = (props: T) => AnyStyle;

export type TemplateMap<T extends AbstractProps> = Partial<
  Record<keyof T, StyleTemplate<T>>
>;

export type Handler<T extends AbstractProps> = {
  propNames?: (keyof T)[];
  templateFns?: TemplateMap<T>;
} & ((props: T) => AnyStyle);

export type HandlerProps<T extends Handler<AbstractProps>> = Parameters<T>[0];

export type DirectionalConfig = {
  propName: PropAlias;
  altProps?: Readonly<string[]>;
  type: 'directional';
  scale: AbstractScales;
  computeValue: (value: ScaleShape[number]) => string | number;
};

export type StandardConfig = {
  propName: PropAlias | Readonly<PropAlias[]>;
  type: 'standard';
  scale: AbstractScales;
  computeValue: (value: ScaleShape[number]) => string | number;
};

export type AbstractSystemConfig = StandardConfig | DirectionalConfig;

/** Theme Aware Configurations */

export type ThematicConfig<T extends AbstractTheme> =
  | (StandardConfig & { scale: ScaleShape | ScaleMap | Readonly<keyof T> })
  | (DirectionalConfig & { scale: ScaleShape | ScaleMap | Readonly<keyof T> });

export type PropKey<T extends AbstractSystemConfig> =
  | Extract<T, { propName: string }>['propName']
  | Extract<T, { propName: Readonly<string[]> }>['propName'][number]
  | Extract<T, { altProps: Readonly<string[]> }>['altProps'][number];

export type ThematicScaleValue<
  T extends AbstractTheme,
  K extends ThematicConfig<T>
> =
  | NeverUnknown<SafeLookup<T[Extract<K, { scale: string }>['scale']]>>
  | SafeMapKey<Extract<K, { scale: ScaleMap }>['scale']>
  | Extract<K, { scale: ScaleShape }>['scale'][number];

export type ThematicProps<
  T extends AbstractTheme,
  K extends ThematicConfig<T>
> = Partial<
  Record<
    PropKey<K>,
    ThematicScaleValue<T, K> | OptionalResponiveProp<ThematicScaleValue<T, K>>
  >
>;
