import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiFetch } from "@/lib/apiClient"
import { Manager } from '@/types/manager'

export const useManagers = () => {
    return useQuery({
        queryKey: ["managers"],
        queryFn: () => apiFetch<Manager>("managers"),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}

