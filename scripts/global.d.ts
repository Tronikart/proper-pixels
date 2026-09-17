// Type-only declarations for foundry-vtt-types augmentation; not emitted at runtime.
export {};

// Options for the optional "Tagger" module (https://github.com/fantasycalendar/FoundryVTT-Tagger); not part of Foundry core.
interface TaggerHasTagsOptions {
  matchAny?: boolean;
  matchExactly?: boolean;
  caseInsensitive?: boolean;
}

interface TaggerGetByTagOptions extends TaggerHasTagsOptions {
  allScenes?: boolean;
  objects?: unknown[];
  ignore?: unknown[];
  sceneId?: string;
  returnObjects?: boolean;
}

// All hooks used by this module fire no earlier than "init", so `game`/`canvas` can be treated as initialized from that point on.
declare module "fvtt-types/configuration" {
  interface AssumeHookRan {
    init: never;
  }
}

declare global {
  interface SettingConfig {
    "proper-pixels.affectTiles": boolean;
    "proper-pixels.affectTokens": boolean;
    "proper-pixels.affectCharacterSheets": boolean;
    "proper-pixels.tokenTag": string;
  }

  const Tagger:
    | {
        getByTag: (inTags: string | string[], inOptions?: TaggerGetByTagOptions) => unknown[];
        hasTags: (inObjects: unknown, inTags: string | string[], inOptions?: TaggerHasTagsOptions) => boolean;
        getTags: (inObject: unknown) => string[];
        setTags: (inObjects: unknown, inTags?: string | string[]) => Promise<unknown>;
        toggleTags: (inObjects: unknown, inTags?: string | string[]) => Promise<unknown>;
        addTags: (inObjects: unknown, inTags: string | string[]) => Promise<unknown>;
      }
    | undefined;

  interface Window {
    Tagger?: typeof Tagger;
  }
}
