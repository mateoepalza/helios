export interface Campaign{
    _id: string,
    title: string;
    status: string;
    createdAt: Date;
    type: string;
    users: number;
    sentAt: Date
}