export const useAuthEmail = () => useState<string>("authEmail", () => "");

export const useAuthState = () => {
  const { $toast } = useNuxtApp();
  const router = useRouter();

  const isLoading = ref(false);

  async function register(name: string, email: string, password: string) {
    try {
      isLoading.value = true;
      const { execute } = await useCustomFetch("/api/v1/auth/register", {
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
      $toast.success("success, Please check your email to verify you account");
      router.push("/auth/login");
    } catch (error: any) {
      $toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  }

  async function login(email: string, password: string) {
    try {
      isLoading.value = true;
      const { execute } = await useCustomFetch("/api/v1/auth/login", {
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
      $toast.success("Logged in successfully \u{1F38A}");
      router.push("/product");
    } catch (error: any) {
      $toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    login,
    register,
    isLoading,
  };
};
