import type { UseFetchOptions } from "nuxt/app";
// import { useStorage } from "@vueuse/core"
import { defu } from "defu";

export interface ApiErrorResponse {
  name: string;
  error: ApiErrorData;
  code: number;
  message: string; // this corresponds
  devMessage: string;
  data: null;
}

export interface ApiErrorData {
  userMessage: string;
  validationError: unknown[];
}

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  //   const userAuthToken = useStorage("token", "")
  const runtimeConfig = useRuntimeConfig();

  let apiResponse: ApiErrorResponse;

  const defaults: UseFetchOptions<T> = {
    baseURL: runtimeConfig.public.baseUrl,
    // cache request
    key: url,

    // set user token if connected
    // headers: userAuthToken.value
    //   ? { Authorization: `Bearer ${userAuthToken.value}` }
    //   : {},
    onRequestError() {
      apiResponse = {
        code: 0,
        data: null,
        devMessage: "Failed to complete the request",
        error: {
          userMessage:
            "Failed to connect to the server, please check your internet connection and try again",
          validationError: [],
        },
        message:
          "Failed to connect to the server, please check your internet connection and try again",
        name: "client-error",
      };
    },

    onResponseError(_ctx) {
      console.log("Response error");
      // clearError({redirect: "/discounts"})
      if (_ctx.response.status <= 500 && _ctx.response.status !== 404) {
        console.log("not 404, <=500");
        // This is most likely a 400 error, Bad request
        apiResponse = _ctx.response._data;
      } else {
        console.log("500 error");
        // This is most likely a 500 or 404 error, no valid data response from the server
        apiResponse = {
          code: _ctx.response.status,
          data: null,
          devMessage:
            "Fatal error with your request, please check the status code",
          error: {
            userMessage:
              "Failed to connect with our servers, Kindly contact support at jimohsodiq301@gmail.com",
            validationError: [],
          },
          message:
            "Failed to connect with our servers, Kindly contact support at jimohsodiq301@gmail.com",

          name: "server-communication-error",
        };
      }
      if (apiResponse.error.userMessage) {
        apiResponse.message = apiResponse.error.userMessage;
        // TODO: Compute validation errors here also
      }
      throw createError({
        statusCode: apiResponse.code,
        message: apiResponse.message,
        data: apiResponse.data,
        name: apiResponse.name,
      });
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
}
