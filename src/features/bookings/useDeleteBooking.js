import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings"


export function useDeleteBooking() {
    const queryClient = useQueryClient()

    const { isLoading: isDeleted, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success("Booking succesfully deleted")

            queryClient.invalidateQueries({
                queryKey: ["bookings"]
            })
        },
        onError: err => toast.error(err)
    })
    return { isDeleted, deleteBooking }
}