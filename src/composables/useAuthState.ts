import type { LocationQueryValue } from "vue-router";
import type { SignedInUser } from './types/userTypes';

export const useAuthEmail = () => useState<string>("authEmail", () => "");

export const userIsLoggedIn = () =>
  useState<boolean>("userIsLoggedIn", () => false);

export const useSignedInUser = () => useState<SignedInUser | null | undefined>("signedInUser", () => null);

export const useAuthState = () => {
  const signedInUser =  useSignedInUser()
  const router = useRouter();
  const isLoggedIn = userIsLoggedIn()

  const isLoading = ref(false);
  const error = ref(false);
  const verifyEmailError = ref<any>(null);
  const loginError = ref<any>(null);

  async function register(name: string, email: string, password: string) {
    isLoading.value = true;
    const { execute, error } = await useCustomFetch("/api/v1/auth/register", {
      body: {
        name,
        email,
        password,
      },
      immediate: false,
      method: "POST",
      server: false,
      lazy: true,
      watch: false,
    });
    await execute();
    if (error.value) {
      useToast().error(error.value.message);
      isLoading.value = false;
      return;
    }
    useToast().success(
      "success, Please check your email to verify you account"
    );
    isLoading.value = false;
    router.push("/auth/login");
  }

  async function login(email: string, password: string) {
    isLoading.value = true;
    const { execute, error } = await useCustomFetch("/api/v1/auth/login", {
      body: {
        email,
        password,
      },
      immediate: false,
      method: "POST",
      server: false,
      lazy: true,
      watch: false,
    });
    await execute();
    const {error: getProfileError, data: profileData} = await showCurrentUser();
    isLoading.value = false;
    loginError.value = error.value;
    // if (getProfileError.value) {
    //   loginError.value = getProfileError.value;
    // }
    if (loginError.value) {
      return useToast().error(loginError.value.message);
    }
    useToast().success("success, Logged in successfully");
    router.push("/profile");
  }

  async function verifyEmail(
    email: LocationQueryValue,
    token: LocationQueryValue
  ) {
    isLoading.value = true;
    const { execute, error } = await useCustomFetch(
      "/api/v1/auth/verify-email",
      {
        body: {
          email,
          verificationToken: token,
        },
        immediate: false,
        method: "POST",
        server: false,
        lazy: true,
        watch: false,
      }
    );
    await execute();
    isLoading.value = false;
    verifyEmailError.value = error.value;
    if (error.value) {
      return useToast().error(error.value.message);
    }
    useToast().success("Your email is successfully verified");
    setTimeout(() => {
      router.replace("/auth/login")
    }, 3000)
  }

  async function showCurrentUser() {
    const { execute, error, data } = await useCustomFetch<ShowCurrentUserResponse>(
      "/api/v1/users/show",
      {
        method: "GET",
        server: false,
        lazy: true,
        watch: false,
        immediate: false,
      }
    );
    await execute();
    if(error.value) {
      await logout()
      isLoggedIn.value = false
      return {
        error,
        data,
      };
    }
    signedInUser.value= data.value?.data;

    // 
    return {
      error,
      data,
    };
  }

  async function logout() {
    const { execute, error, data } = await useCustomFetch<ShowCurrentUserResponse>(
      "/api/v1/auth/logout",
      {
        method: "DELETE",
        server: false,
        lazy: true,
        watch: false,
        immediate: false,
      }
    );
    await execute();
    if(error.value){
      return  {error, success: false}
    }
    isLoggedIn.value = false
    signedInUser.value = null
    return {error, success: true}
  }

  return {
    login,
    register,
    isLoading,
    error,
    verifyEmail,
    verifyEmailError,
    showCurrentUser,
    logout,
  };
};
