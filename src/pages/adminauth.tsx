'use server';

import { useRouter } from 'next/router';
import LoginForm from '~/components/LoginForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  username: string;
  password: string;
}

const adminauth = () => {
  const onSubmit = async (values: FormValues) => {
    const isAuthenticated =
      values.username === 'admin' && values.password === '123';
    const router = useRouter();

    if (isAuthenticated) {
      router.push('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="relative h-full w-full flex-1 flex flex-col justify-center">
      <h1 className="pb-6 pt-6 text-center text-6xl font-bold text-[#5480a9]">
        Přihlášení do administrace
      </h1>
      <LoginForm />
    </div>
  );
};

export default adminauth;
