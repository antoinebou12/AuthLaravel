import { useEffect, FormEventHandler, useRef } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import PasswordStrengthBar from 'react-password-strength-bar';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        email: '',
        phone: '',
        roles: 'roles:residential',
        permissions: 'permissions:user',
        password: '',
        password_confirmation: '',
    });

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (recaptchaRef) {
            recaptchaRef.current?.execute();
        }
        // get value from residential checkbox
        const residential = document.getElementById('ResidentialRoles') as HTMLInputElement;
        const business = document.getElementById('BusinessRoles') as HTMLInputElement;

        // set value to roles
        if (residential.checked) {
            setData('roles', 'roles:residential');
        } else if (business.checked) {
            setData('roles', 'roles:business');
        }


        if (data.permissions === '') {
            setData('permissions', 'permissions:user');
        }

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />
                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="Phone" />
                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className="flex">
                        <div className="flex-grow">
                            <InputLabel htmlFor="ResidentialRoles" value="Residential" />
                            <Checkbox
                                id="ResidentialRoles"
                                name="ResidentialRoles"
                                value="residentialCheck"
                                className="mt-1 block"
                                disabled={data.roles === 'roles:business'}
                                onChange={(e) => setData('roles', e.target.checked ? 'roles:residential' : 'roles:business')}
                            />
                        </div>
                        <div className="flex-grow">
                            <InputLabel htmlFor="BusinessRole" value="Business" />
                            <Checkbox
                                id="BusinessRole"
                                name="BusinessRole"
                                value="businessCheck"
                                className="mt-1 block"
                                disabled={data.roles === 'roles:residential'}
                                onChange={(e) => setData('roles', e.target.checked ? 'roles:business' : 'roles:residential')}
                            />
                        </div>
                    </div>
                </div>

                <InputError message={errors.roles} className="mt-2" />

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <PasswordStrengthBar password={data.password} />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6LefQHklAAAAAC79lja2IdZBq9BpOC5I7qIuEv9i"
                />

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
