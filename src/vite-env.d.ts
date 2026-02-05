/// <reference types="vite/client" />

import "styled-components";
import { Theme } from "./lib/utils/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
