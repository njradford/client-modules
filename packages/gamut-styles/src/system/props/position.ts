import { parseCoordinate } from '../transforms';

export const positioning = {
  position: {
    propName: 'position',
    scale: [] as ('static' | 'fixed' | 'absolute' | 'relative' | 'sticky')[],
  },
  coordinate: {
    scale: [] as (number | string)[],
    computeValue: (value: any) => parseCoordinate(value as string | number),
    propName: ['top', 'left', 'right', 'bottom'],
  },
  zIndex: {
    scale: [] as number[],
    propName: 'zIndex',
  },
} as const;
