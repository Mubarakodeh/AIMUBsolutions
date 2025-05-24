declare namespace Voiceflow {
  interface ChatConfig {
    verify: {
      projectID: string;
    };
    url: string;
    versionID: string;
    session?: {
      persist?: boolean;
      resumeSession?: boolean;
    };
    logging?: {
      level?: 'error' | 'warn' | 'info' | 'debug';
    };
    voice?: {
      url: string;
    };
    launch?: {
      autoLaunch?: boolean;
      hidden?: boolean;
    };
    styles?: {
      dimensions?: {
        width?: string;
        height?: string;
      };
      position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';
      offset?: {
        bottom?: string;
        right?: string;
        left?: string;
        top?: string;
      };
    };
  }

  interface ChatAPI {
    load: (config: ChatConfig) => void;
    destroy: () => void;
  }
}

declare global {
  interface Window {
    voiceflow?: {
      chat: Voiceflow.ChatAPI;
    };
  }
}

export {};