import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            // List all the user accounts and their roles in a grid card partern
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">User Accounts</h3>
                        <div className="mt-4 space-y-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                    User 1
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                    User 2
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                    User 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
