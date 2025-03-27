import { api } from '~/utils/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { CookiesProvider, useCookies } from 'react-cookie';

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);

  const loginMutation = api.users.check.useMutation();
  const router = useRouter();

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const isAdmin = await loginMutation.mutateAsync({
        username: values.username,
        password: values.password,
      });

      if (isAdmin) {
        console.log('Admin login successful, redirecting...');
        setCookie('user', isAdmin, {path: '/'});
        router.push('/admin');
      } else {
        setCookie('user', isAdmin, {path: '/'});
        router.push('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.username) {
      errors.username = 'Uživatelské jméno je povinné';
    }

    if (!values.password) {
      errors.password = 'Heslo je povinné';
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-lg">
        <Formik<FormValues>
          initialValues={{
            username: '',
            password: '',
          }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  name="username"
                  placeholder="Uživatelské jméno v soutěži"
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
              >
                Přihlásit se
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
