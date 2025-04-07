import { api } from '~/utils/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';

interface FormValues {
  name: string;
  username: string;
  email: string;
  school: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const router = useRouter();

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = 'Jméno a přijmení jsou povinné';
    }

    if (!values.username) {
      errors.username = 'Uživatelské jméno je povinné';
    } else if (values.username.length < 3) {
      errors.username = 'Uživatelské jméno musí mít alespoň 3 znaky';
    } else if (values.username.length > 10) {
      errors.username = 'Uživatelské jméno musí mít pod 10 znaků';
    }

    if (!values.email) {
      errors.email = 'E-mail je povinný';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalidní e-mail adresa';
    }

    if (!values.school) {
      errors.school = 'Vyplnění školy je povinné';
    }

    if (!values.password) {
      errors.password = 'Heslo je povinné';
    } else if (values.password.length < 8) {
      errors.password = 'Heslo musí být alespoň 8 znaků dlouhé';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Potvrzení hesla je povinné';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Hesla se musí shodovat';
    }

    return errors;
  };

  const mutate = api.users.create.useMutation({
    onSuccess: () => {
      console.log('Success');
    },
    onError: () => {
      console.log('Failure');
    },
  });

  const onSubmit = (values: FormValues) => {
    mutate.mutate({
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      school: values.school,
    });

    router.push('/');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded p-8 shadow-lg">
        <Formik<FormValues>
          initialValues={{
            name: '',
            username: '',
            email: '',
            school: '',
            password: '',
            confirmPassword: '',
          }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  name="name"
                  placeholder="Jméno a přijmení"
                  className="w-full rounded border p-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
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
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full rounded border p-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <Field
                  type="text"
                  name="school"
                  placeholder="Škola, kterou navštěvujete"
                  className="w-full rounded border p-2"
                />
                <ErrorMessage
                  name="school"
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
              <div className="mb-4">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Ověřte si svoje heslo"
                  className="w-full rounded border p-2"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Registrovat se
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
