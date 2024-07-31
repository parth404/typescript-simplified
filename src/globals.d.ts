declare global {
  interface Console {
    superLog: () => void;
  }
}

export {}; // This is needed to prevent TS4023 error
