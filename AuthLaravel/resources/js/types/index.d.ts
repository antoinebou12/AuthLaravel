export interface User {
    id: number;
    name: string;
    username: string;
    phone: string;
    role: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    last_login: string;
    browser: string;
    os: string;
    ip: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
