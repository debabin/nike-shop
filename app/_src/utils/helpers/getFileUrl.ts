export const getFileUrl = (path: string) => `${process.env.STRAPI_URL ?? ''}${path}`;
