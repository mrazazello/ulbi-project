type ModsType = Record<string, boolean>;

export const classNames = (
  className: string,
  mods: ModsType = {},
  addons: Array<string | undefined> = []
): string => {
  return [
    className,
    ...Object.keys(mods)
      .filter((el) => mods[el] === true)
      .map((el) => el),
    ...addons.filter(Boolean),
  ].join(" ");
};
