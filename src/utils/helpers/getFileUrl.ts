export const getFileUrl = (path: string) => `${process.env.PUBLIC_STRAPI_API_URL ?? ''}${path}`;
