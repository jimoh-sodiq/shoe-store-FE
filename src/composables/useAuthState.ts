import type { LocationQueryValue } from "vue-router";

export const useAuthEmail = () => useState<string>("authEmail", () => "");

export const userIsLoggedIn = () =>
  useState<boolean>("userIsLoggedIn", () => false);

export const useUserProfile =  ref<any | null>(null)

export const useAuthState = () => {
  const router = useRouter();

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
    const getProfileError = await getUserProfile();
    isLoading.value = false;
    loginError.value = error.value;
    // if (getProfileError) {
    //   loginError.value = error.value;
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
      // return useToast().error(error.value.message);
    }
  }

  async function getUserProfile() {
    const { execute, error, data } = await useCustomFetch("/api/v1/users/show", {
      method: "GET",
      server: false,
      lazy: true,
      watch: false,
      immediate: false,
    });
    await execute();
    useUserProfile.value = data
    return error.value;
  }

  async function logout() {
    return useToast().warn("please put in yur");
  }

  return {
    login,
    register,
    isLoading,
    error,
    verifyEmail,
    verifyEmailError,
    getUserProfile,
  };
};
