export function normalizePath(path = "/") {
  const cleanPath = path.split("?")[0].split("#")[0] || "/";
  return cleanPath === "/" ? "/" : `${cleanPath.replace(/\/+$/, "")}/`;
}
