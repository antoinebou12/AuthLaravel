import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import React from "react";
import ThreeScene from "@/Components/ThreeScene";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                {auth.user ? (
                    <>
                        <div className="bg-white dark:bg-gray-800 shadow flex justify-center">
                            <Link
                                href={route("dashboard")}
                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-white dark:bg-gray-800 border border-transparent rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Dashboard
                            </Link>
                        </div>
                        <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8">
                                <div className="bg-white dark:bg-gray-800 shadow rounded-lg py-8 px-4 sm:px-10">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="w-auto h-12 mx-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                        <h2 className="ml-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                                            Welcome to Inertia.js + Laravel
                                        </h2>
                                    </div>
                                    <div className="mt-8">
                                        <div className="mt-6">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Laravel Version
                                            </p>
                                            <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                {laravelVersion}
                                            </p>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                PHP Version
                                            </p>
                                            <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                {phpVersion}
                                            </p>
                                            {
                                                // show the user name, last login, etc.
                                                auth.user ? (
                                                    <div>
                                                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                            {auth.user.name}
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                            {auth.user.email}
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                            {
                                                                auth.user
                                                                    .last_login
                                                            }
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
                                                ) : (
                                                    <div>
                                                        <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                            Not logged in
                                                        </p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-white dark:bg-gray-800 shadow flex justify-center">
                            <Link
                                href={route("login")}
                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-white dark:bg-gray-800 border border-transparent rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="flex items-center justify-center w-full px-4 py-2 ml-3 text-sm font-medium text-indigo-600 bg-white dark:bg-gray-800 border border-transparent rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8">
                                <div className="bg-white dark:bg-gray-800 shadow rounded-lg py-8 px-4 sm:px-10">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="w-auto h-12 mx-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                        <h2 className="ml-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                                            Welcome to Inertia.js + Laravel
                                            {/* <ThreeScene className="w-1/2 h-1/2" /> */}
                                        </h2>
                                    </div>
                                    <div className="mt-8">
                                        <div className="mt-6">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Laravel Version
                                            </p>
                                            <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                {laravelVersion}
                                            </p>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                PHP Version
                                            </p>
                                            <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                                                {phpVersion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
