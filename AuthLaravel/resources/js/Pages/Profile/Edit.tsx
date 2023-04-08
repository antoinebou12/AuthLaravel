import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div className="max-w-xl">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Two Factor Authentication</h3>
                            <div className="mt-5">
                                <a href="#" className="text-red-600 hover:text-red-900">Manage two factor authentication</a>
                            </div>
                            <div className="mt-4 space-y-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        {auth.user['2fa'] ? (
                                            <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                        Status
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        {
                                            auth.user['recover_code']
                                        }
                                    </div>
                                    <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                        Recovery codes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
