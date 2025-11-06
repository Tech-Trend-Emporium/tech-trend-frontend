import { http } from "../lib/http";
import type { ApprovalAcceptedRaw, ApprovalJobResponse, ApprovalJobResponseRaw, CategoryResponse, CategoryResponseRaw, CreateCategoryRequest, Page, UpdateCategoryRequest } from "../models";


const toDate = (iso?: string | null) => (iso ? new Date(iso) : null);
const mapCategory = (c: CategoryResponseRaw): CategoryResponse => ({
    ...c,
    createdAt: new Date(c.createdAt),
    updatedAt: toDate(c.updatedAt) ?? null,
});
const mapApprovalJob = (j: ApprovalJobResponseRaw): ApprovalJobResponse => ({
    ...j,
    requestedAt: new Date(j.requestedAt as unknown as string),
    decidedAt: j.decidedAt ? new Date(j.decidedAt as unknown as string) : null,
});

export type CreateCategoryResult =
    | { kind: "created"; data: CategoryResponse }                        
    | { kind: "accepted"; data: { message: string; approvalJob: ApprovalJobResponse } };

export type DeleteCategoryResult =
    | { kind: "no-content" }                                        
    | { kind: "accepted"; data: { message: string; approvalJob: ApprovalJobResponse } }; 

const BASE = "/Category";

export const CategoryService = {
    getById: (id: number) =>
        http.get<CategoryResponseRaw>(`${BASE}/${id}`).then(r => mapCategory(r.data)),

    list: (opts?: { skip?: number; take?: number }): Promise<Page<CategoryResponse>> =>
        http.get<{ Total: number; Items: CategoryResponseRaw[] }>(`${BASE}`, {
                params: { skip: opts?.skip ?? 0, take: opts?.take ?? 50 },
            })
            .then(r => ({
                total: r.data.Total,
                items: r.data.Items.map(mapCategory),
            })),

    create: async (payload: CreateCategoryRequest): Promise<CreateCategoryResult> => {
        const res = await http.post<CategoryResponseRaw | ApprovalAcceptedRaw<ApprovalJobResponseRaw>>(
            `${BASE}`,
            payload
        );

        if (res.status === 202) {
            const body = res.data as ApprovalAcceptedRaw<ApprovalJobResponseRaw>;
            return {
                kind: "accepted",
                data: { message: body.message, approvalJob: mapApprovalJob(body.approvalJob) },
            };
        }

        return { kind: "created", data: mapCategory(res.data as CategoryResponseRaw) };
    },

    update: (id: number, payload: UpdateCategoryRequest) =>
        http.put<CategoryResponseRaw>(`${BASE}/${id}`, payload).then(r => mapCategory(r.data)),

    remove: async (id: number): Promise<DeleteCategoryResult> => {
        const res = await http.delete<void | ApprovalAcceptedRaw<ApprovalJobResponseRaw>>(`${BASE}/${id}`);

        if (res.status === 202) {
            const body = res.data as ApprovalAcceptedRaw<ApprovalJobResponseRaw>;
            return {
                kind: "accepted",
                data: { message: body.message, approvalJob: mapApprovalJob(body.approvalJob) },
            };
        }

        return { kind: "no-content" };
    },
};