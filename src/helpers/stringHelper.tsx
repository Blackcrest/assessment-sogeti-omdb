export const stringToArray = (string: string | undefined, divider = ',') => {
  if (string === undefined || string.includes(divider)) return []

  return string.split(divider)
}
