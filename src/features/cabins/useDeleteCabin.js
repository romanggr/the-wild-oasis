import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins"

export function useDeleteCabin() {
    const queryClient = useQueryClient()

    const { isLoading: isDeleted, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success("Cabin succesfully deleted")

            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
        },
        onError: err => toast.error(err)
    })
    return { isDeleted, deleteCabin }
}