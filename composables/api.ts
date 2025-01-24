import type { UseFetchOptions } from "nuxt/app";

type Path = string | Ref<string> | (() => string);

export const useApi = <T>(path: Path, opt?: UseFetchOptions<T>) => {
  return useFetch(path, {
    ...opt,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
};
