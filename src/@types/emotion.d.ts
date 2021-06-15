import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        minWidth: string,
        maxWidth: string,
        colors: {
            background: {
                main: string
            }
        }
    }
}