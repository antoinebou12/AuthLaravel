import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
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
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div>
                        <img
                            className="w-auto h-12 mx-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
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
        </>
    );
}
