export interface User {
    id: number;
    name: string;
    role: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    "2fa": boolean;
    recover_code: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
