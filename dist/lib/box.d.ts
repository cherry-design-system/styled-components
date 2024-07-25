import { default as React } from 'react';
import { ContainerProps } from './container';

declare const Box: React.ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & React.RefAttributes<unknown>>;
export { Box };
