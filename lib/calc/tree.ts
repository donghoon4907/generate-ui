import { Gnb } from "../../types/gnb";

export function getParentGnbMenus(
  previousLevelGnbMenus: Gnb[],
  currentLevelGnbMenus: Gnb[],
  targetId: string
): Gnb[] {
  const node = currentLevelGnbMenus.find(menu => menu.id === targetId);

  if (node) {
    return previousLevelGnbMenus;
  }

  const nextLevelGnbMenus = currentLevelGnbMenus
    .flatMap(menu => menu.items)
    .filter(menu => {
      return menu.id.charAt(0) === targetId.charAt(0);
    });

  return getParentGnbMenus(currentLevelGnbMenus, nextLevelGnbMenus, targetId);
}

export function getCurrentLevelGnbMenus(
  currentLevelGnbMenus: Gnb[],
  href: string
): Gnb[] {
  const node = currentLevelGnbMenus.find(menu => menu.href === href);

  if (node) {
    let result = currentLevelGnbMenus;

    const isRoot = currentLevelGnbMenus[0].id.length === 1;

    if (!isRoot) {
      result = currentLevelGnbMenus.filter(
        menu => node.id.charAt(0) === menu.id.charAt(0)
      );
    }

    return result;
  }

  const nextLevelGnbMenus = currentLevelGnbMenus.flatMap(menu => menu.items);

  return getCurrentLevelGnbMenus(nextLevelGnbMenus, href);
}
