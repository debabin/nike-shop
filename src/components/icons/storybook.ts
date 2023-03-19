import * as ICONS from './index';

type IconOptions = Record<keyof typeof ICONS, any>;
export const ICON_OPTIONS = Object.entries(ICONS).reduce<IconOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName.replace(/icon$/i, '') as keyof typeof ICONS] = IconComponent({});
    return acc;
  },
  {} as IconOptions
);

console.log('ICON_OPTIONS', Object.entries(ICON_OPTIONS));
