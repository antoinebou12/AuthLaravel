import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tableau de bord
                </h2>
            }
        >
            <Head title="Tableau de bord" />
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
            {/* Ajouter la liste des tâches pour chaque client */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
                            Liste des tâches pour chaque client
                        </h3>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
