import * as radixColors from '@radix-ui/colors';

type RadixColorFamily = keyof typeof radixColors;

export const radixColorFactory = (
  colorMap: Record<string, RadixColorFamily>
) => {
  return Object.entries(colorMap).reduce((acc, [targetName, radixName]) => {
    if (radixName.endsWith('Dark')) return acc;

    const colorScale = radixColors[radixName] as Record<string, string>;

    const scaleObject = Object.entries(colorScale).reduce(
      (scale, [token, value]) => {
        const number = token.match(/\d+$/)?.[0];
        if (number) {
          scale[number] = value;
        }
        return scale;
      },
      {} as Record<string, string>
    );

    return {
      ...acc,
      [targetName]: scaleObject,
    };
  }, {});
};

// --------

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
