import { createRemoteJWKSet, decodeJwt, jwtVerify } from "jose";
import { defineStore } from "pinia";

export interface AccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface User {
  id: string;
  name: string;
  username: string;
}

export const useAuthStore = defineStore(
  "auth",
  () => {
    const accessToken = ref<AccessToken>();
    const expiresAtTimestamp = ref<number>();
    const user = ref<User>();

    const bearerToken = computed(() => accessToken.value?.access_token);
    const expiresAt = computed(() => new Date(expiresAtTimestamp.value ?? 0));
    const isLoggedIn = computed(
      () => !!bearerToken.value && (expiresAtTimestamp.value ?? 0) > Date.now(),
    );

    const setAccessToken = async (token: AccessToken): Promise<boolean> => {
      const {
        public: { apiBaseUrl },
      } = useRuntimeConfig();
      const keysUrl = new URL(apiBaseUrl);
      keysUrl.pathname = "/keys";
      const jwks = createRemoteJWKSet(keysUrl);
      try {
        await jwtVerify(token.access_token, jwks);
      } catch (e) {
        return false;
      }

      accessToken.value = token;
      expiresAtTimestamp.value = Date.now() + token.expires_in * 1000;

      const meUrl = new URL(apiBaseUrl);
      meUrl.pathname = "auth/admin/me";
      const response = await fetch(meUrl.toString(), {
        headers: {
          Authorization: `Bearer ${bearerToken.value}`,
        },
      });

      if (!response.ok) {
        console.log("Failed to fetch user data");
      } else {
        let { data } = await response.json();
        user.value = {
          id: data.id,
          name: data.name,
          username: data.username,
        };
      }

      return true;
    };

    const logout = () => {
      accessToken.value = undefined;
      expiresAtTimestamp.value = undefined;
      user.value = undefined;

      navigateTo("/auth/login");
    }

    return {
      accessToken,
      bearerToken,
      user,
      expiresAtTimestamp,
      expiresAt,
      isLoggedIn,
      setAccessToken,
      logout,
    };
  },
  {
    persist: {
      key: "appName__auth__",
    },
  },
);
