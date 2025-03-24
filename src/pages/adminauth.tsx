'use server';

import { useRouter } from 'next/router';
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
    <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-lg">
        <Formik<FormValues>
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  name="username"
                  placeholder="Jméno a přijmení"
                  className="w-full rounded border p-2"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Heslo"
                  className="w-full rounded border p-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                disabled={isSubmitting}
              >
                Přihlásit se do administrace
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default adminauth;
