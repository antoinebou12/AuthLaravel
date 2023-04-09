import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";


export default function TwoFactorAuthUserFrom({ mustVerifyEmail, status, className = "" }: { mustVerifyEmail: boolean, status?: string, className?: string }) {
    const auth = usePage<PageProps>().props.auth;

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Two Factor Authentication
                </h2>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Enable two factor authentication to add additional security to your account.
                </div>
            </header>
            <div className="mt-4 space-y-6">
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                {mustVerifyEmail &&
                auth.user.email_verified_at === null ? (
                    <>
                        <Link
                            href={route(
                                "verification.send"
                            )}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            <svg
                                className="h-10 w-10 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </Link>
                    </>
                ) : (
                    <svg
                        className="h-10 w-10 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>
            <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                Status
            </div>
        </div>
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10"></div>
            <div className="ml-4 text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                Recovery codes
            </div>
        </div>
    </div>
        </section>
    );

}
