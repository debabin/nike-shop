export const getFileUrl = (path: string) => `${import.meta.env.PUBLIC_STRAPI_API_URL ?? ''}${path}`;
