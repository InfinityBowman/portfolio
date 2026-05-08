interface PlausibleOptions {
  props?: Record<string, string | number | boolean>;
  callback?: () => void;
}

interface Window {
  plausible: ((event: string, options?: PlausibleOptions) => void) & {
    q?: unknown[];
    init?: (options?: Record<string, unknown>) => void;
    o?: Record<string, unknown>;
  };
}
