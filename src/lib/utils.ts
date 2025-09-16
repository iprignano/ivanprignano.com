export const kebabCase = (string: string) => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^A-Za-z 0-9]/g, '')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
