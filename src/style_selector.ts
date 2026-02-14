export function selectClassFromPath(styles: any, path: string, def: string) {
  if (path.startsWith("/subsonic")) {
    return styles.subsonic;
  } else if (path.startsWith("/icbd")) {
    return styles.icbd;
  } else {
    return styles[def];
  }
}
