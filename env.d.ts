/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STRAPI_API_TOKEN: string;
  readonly PUBLIC_STRAPI_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
