import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";

function formatDate(date: string) {
    return new Date(date).toLocaleDateString(undefined, {
        localeMatcher: "best fit",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function Dashboard({ auth, users }: PageProps) {
    const tableHeadings = [
        "Email",
        "Name",
        "Username",
        "Roles",
        "Permissions",
        "Phone",
        "Created",
        "Updated",
        "Browser",
        "OS",
        "IP",
        "Last Login",
        "Last Logout",
        "Email Verified At",
    ];

    const isAdmin = auth.user.roles.includes("admin");

    function getDetails(user: any) {
        const details = [
            user.email,
            user.name,
            user.username,
            user.roles,
            user.permissions,
            user.phone,
            formatDate(user.created_at),
            formatDate(user.updated_at),
            user.browser,
            user.os,
            user.ip,
            formatDate(user.last_login),
            formatDate(user.last_logout),
            formatDate(user.email_verified_at),
        ];

        if (!isAdmin) {
            // hide details for non-admin users
            details.splice(3, 2);
        }

        return details;
    }

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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            User Details
                        </h3>
                        <div className="mt-4">
                            You are logged in as {auth.user.name}
                        </div>
                        <br />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            User Accounts
                        </h3>
                        <table className="table-auto w-full mt-4">
                            <thead className="bg-gray-200 dark:bg-gray-600">
                                <tr className="bg-gray-50 dark:bg-gray-700">
                                    {tableHeadings.map((heading) => (
                                        <th key={heading} className="auto">
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className={
                                            user.roles.includes("admin")
                                                ? "bg-red-100 dark:bg-red-700"
                                                : "bg-gray-50 dark:bg-gray-700"
                                        }
                                    >
                                        {getDetails(user).map(
                                            (detail, index) => (
                                                <td
                                                    key={index}
                                                    className="text-sm text-gray-900 dark:text-gray-100"
                                                >
                                                    {detail}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
