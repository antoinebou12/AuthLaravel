import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.email}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.last_login}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.ip}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.browser}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.os}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
