import { createAuthClient } from "better-auth/react"
import { useRouter } from "next/navigation";
export const authClient = createAuthClient({
  
    baseURL: process.env.BETTER_AUTH_URL,

    
})


export const Google_signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard"
  });
};

export const signOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/login";
      },
    },
  });
};