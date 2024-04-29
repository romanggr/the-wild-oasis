import { useMutation } from "@tanstack/react-query"
import { signup as signupApi } from "../../services/apiAuth"
import toast from "react-hot-toast"

export function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user);
            toast.success("Account was successfully created")
        },
        onError: (err) => {
            console.log('ERROR', err);
            toast.error("User don't created");
        },
    })
    return { signup, isLoading }
}