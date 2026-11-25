import z from 'zod'

export const alertType = z.enum(['success', 'info', 'warning', 'error'])

export const alert = z.object({
    id: z.string(),
    type: alertType,
    message: z.string(),
    duration: z.number().optional(),
})

export const errorDetails = z.object({
    title: z.string(),
    status: z.number(),
    code: z.string(),
})

export const errorResponse = z.object({
    data: errorDetails,
})

export const paginationRequest = z.object({
    offset: z.number(),
    limit: z.number(),
})

export const sortDirection = z.enum(['ASC', 'DESC'])

export const sortType = z.object({
    key: z.string(),
    direction: sortDirection.optional(),
})

export const themeColor = z.enum(['light', 'dark'])

export const signalrError = z.object({
    message: z.string(),
})
