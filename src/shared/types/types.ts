import type z from 'zod'

import type {
    alert,
    alertType,
    errorDetails,
    errorResponse,
    paginationRequest,
    signalrError,
    sortDirection,
    sortType,
    themeColor,
} from './schemas'

export type Alert = z.infer<typeof alert>
export type AlertType = z.infer<typeof alertType>

export type ColumnDef<T> = {
    key: keyof T
    header: string
    getClassNames?: (value: T[keyof T]) => string
    renderValue?: (value: T[keyof T]) => React.ReactNode
}

export type ErrorResponse = z.infer<typeof errorResponse>
export type ErrorDetails = z.infer<typeof errorDetails>

export type PaginationRequest = z.infer<typeof paginationRequest>
export type PaginationResponse<T> = {
    data: T[]
    count: number
}

export type SortType = z.infer<typeof sortType>
export type SortDirection = z.infer<typeof sortDirection>

export type ThemeColor = z.infer<typeof themeColor>

export type SignalRError = z.infer<typeof signalrError>
