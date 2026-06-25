import { createAuthClient } from "better-auth/react"
import { useRouter } from "next/navigation";
export const authClient = createAuthClient({
  
    baseURL: "http://localhost:3000"

    
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