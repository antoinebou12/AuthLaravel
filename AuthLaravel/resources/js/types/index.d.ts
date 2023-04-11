export interface User {
    id: number;
    name: string;
    username: string;
    phone: string;
    roles: string;
    permissions: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    last_login: string;
    last_logout: string;
    browser: string;
    os: string;
    ip: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    users: User[] | [];
};
