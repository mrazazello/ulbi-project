type ModsType = Record<string, boolean>;

export const classNames = (
  className: string,
  mods: ModsType = {},
  addons: string[] = []
): string => {
  const res: string[] = [className];
  if (mods !== undefined)
    res.push(
      ...Object.keys(mods)
        .filter((el) => mods[el] === true)
        .map((el) => el)
    );
  if (addons !== undefined) res.push(...addons.filter(Boolean));

  return res.join(" ");
};
