// global.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}


declare namespace JSX {
  interface IntrinsicElements {
    "elevenlabs-convai": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "agent-id"?: string;
    };
  }
}
