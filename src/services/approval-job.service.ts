import { http } from "../lib/http";
import type { ApprovalJob, ApprovalJobResponse, DecideApprovalJobRequest, SubmitApprovalJobRequest } from "../models";


const BASE = "/ApprovalJob";

const mapApprovalJob = (j: ApprovalJobResponse): ApprovalJob => ({
    ...j,
    requestedAt: new Date(j.requestedAt),
    decidedAt: j.decidedAt ? new Date(j.decidedAt) : null,
});

export const ApprovalJobService = {
    submit: (payload: SubmitApprovalJobRequest) =>
        http.post<ApprovalJobResponse>(`${ BASE }`, payload).then(r => mapApprovalJob(r.data)),

    listPending: (params?: { skip?: number; take?: number }) =>
        http.get<ApprovalJobResponse[]>(`${ BASE }/pending`, {
                params: { skip: params?.skip ?? 0, take: params?.take ?? 50 },
            }).then(r => r.data.map(mapApprovalJob)),

    decide: (id: number, payload: DecideApprovalJobRequest) =>
        http.post<ApprovalJobResponse>(`${ BASE }/${ id }/decision`, payload).then(r => mapApprovalJob(r.data)),

    getById: (id: number) =>
        http.get<ApprovalJobResponse>(`${ BASE }/${ id }`).then(r => mapApprovalJob(r.data)),
};