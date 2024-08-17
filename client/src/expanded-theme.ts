import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; // eslint-disable-line no-use-before-define
 
declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}