/**
 * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
 */
export interface MuiMediaQueryListEvent {
    matches: boolean;
}
/**
 * @deprecated Not used internally. Use `MediaQueryList` from lib.dom.d.ts instead.
 */
export interface MuiMediaQueryList {
    matches: boolean;
    addListener: (listener: MuiMediaQueryListListener) => void;
    removeListener: (listener: MuiMediaQueryListListener) => void;
}
/**
 * @deprecated Not used internally. Use `(event: MediaQueryListEvent) => void` instead.
 */
export declare type MuiMediaQueryListListener = (event: MuiMediaQueryListEvent) => void;
export interface Options {
    defaultMatches?: boolean;
    matchMedia?: typeof window.matchMedia;
    noSsr?: boolean;
    ssrMatchMedia?: (query: string) => {
        matches: boolean;
    };
}
export default function useMediaQuery<Theme = unknown>(queryInput: string | ((theme: Theme) => string), options?: Options): boolean;