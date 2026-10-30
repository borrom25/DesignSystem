export type PlugPlaygroundState = {
  title: string;
  subtitle: string;
  withImage: boolean;
  withAction: boolean;
};

export const PLUG_DEFAULT_STATE: PlugPlaygroundState = {
  title: "No results found",
  subtitle: "Adjust filters or create a new item to continue.",
  withImage: true,
  withAction: true,
};
