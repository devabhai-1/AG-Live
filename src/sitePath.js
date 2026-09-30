export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL || '/';
  const clean = String(path).replace(/^\//, '');
  return clean ? `${base}${clean}` : base;
}
