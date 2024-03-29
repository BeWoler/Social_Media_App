import {
  Bars3BottomLeftIcon,
  CogIcon,
  ComputerDesktopIcon,
  MagnifyingGlassCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const iconSize = {
  width: 25,
  height: 25,
};

export const iconsArr = [
  <Bars3BottomLeftIcon
    key={'home'}
    width={iconSize.width}
    height={iconSize.height}
  />,
  <ComputerDesktopIcon
    key={'people'}
    width={iconSize.width}
    height={iconSize.height}
  />,
  <MagnifyingGlassCircleIcon
    key={'search'}
    width={iconSize.width}
    height={iconSize.height}
  />,
  <DocumentTextIcon
    key={'create post'}
    width={iconSize.width}
    height={iconSize.height}
  />,
  <CogIcon key={'settings'} width={iconSize.width} height={iconSize.height} />,
];
