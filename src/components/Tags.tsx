import type { ReactNode } from 'react';

import type { Values } from './types/TypeUnion';

export const ColorTags = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
} as const;

type ITagsProps = {
  color: Values<typeof ColorTags>;
  children: ReactNode;
};

const colorToClassMap = {
  [ColorTags.SLATE]: 'bg-zinc-800/50 text-zinc-400',
  [ColorTags.GRAY]: 'bg-gray-800/50 text-gray-400',
  [ColorTags.ZINC]: 'bg-zinc-800/50 text-zinc-400',
  [ColorTags.NEUTRAL]: 'bg-neutral-800/50 text-neutral-400',
  [ColorTags.STONE]: 'bg-stone-800/50 text-stone-400',
  [ColorTags.RED]: 'bg-red-800/50 text-red-400',
  [ColorTags.ORANGE]: 'bg-orange-800/50 text-orange-400',
  [ColorTags.AMBER]: 'bg-amber-800/50 text-amber-400',
  [ColorTags.YELLOW]: 'bg-yellow-800/50 text-yellow-400',
  [ColorTags.LIME]: 'bg-lime-800/50 text-lime-400',
  [ColorTags.GREEN]: 'bg-green-800/50 text-green-400',
  [ColorTags.EMERALD]: 'bg-emerald-800/50 text-emerald-400',
  [ColorTags.TEAL]: 'bg-teal-800/50 text-teal-400',
  [ColorTags.CYAN]: 'bg-amber-800/50 text-amber-400',
  [ColorTags.SKY]: 'bg-sky-800/50 text-sky-400',
  [ColorTags.BLUE]: 'bg-blue-800/50 text-blue-400',
  [ColorTags.INDIGO]: 'bg-indigo-800/50 text-indigo-400',
  [ColorTags.VIOLET]: 'bg-violet-800/50 text-violet-400',
  [ColorTags.PURPLE]: 'bg-purple-800/50 text-purple-400',
  [ColorTags.FUCHSIA]: 'bg-fuchsia-800/50 text-fuchsia-400',
  [ColorTags.PINK]: 'bg-pink-800/50 text-pink-400',
  [ColorTags.ROSE]: 'bg-rose-800/50 text-rose-400',
};

const Tags = (props: ITagsProps) => (
  <div
    className={`rounded-md px-2 py-1 text-xs font-semibold ${colorToClassMap[props.color]
      }`}
  >
    {props.children}
  </div>
);

export { Tags };
