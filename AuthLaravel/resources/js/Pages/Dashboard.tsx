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
                            {auth.user.browser}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.os}
                        </p>
                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                            {auth.user.ip}
                        </p>
                        {auth.user.roles}
                        {auth.user.roles === "roles:residential" && (
                            <>
                                <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                    Residential
                                </p>
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/000/355/795/original/house-vector-icon.jpg"
                                    alt="House icon"
                                    className="w-8 h-8 mt-2"
                                />
                            </>
                        )}
                        {auth.user.roles === "roles:business" && (
                            <>
                                <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                    Business
                                </p>
                                <img
                                    src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/company-enterprise-icon.png"
                                    alt="Business icon"
                                    className="w-8 h-8 mt-2"
                                />
                            </>
                        )}
                        {auth.user.roles === "roles:users" && (
                            <>
                                <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                    Users
                                </p>
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                                    alt="Users icon"
                                    className="w-8 h-8 mt-2"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* Add task list for each client */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
                            Task List for Each Client
                        </h3>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
