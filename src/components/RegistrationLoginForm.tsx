import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegistrationLoginFormProps {
  formType: "Login" | "Register";
}

const RegistrationLoginForm: React.FC<RegistrationLoginFormProps> = ({
  formType,
}) => {
  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 2) {
      errors.username = "Username must be at least 2 characters";
    } else if (values.username.length > 50) {
      errors.username = "Username must be less than 50 characters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  const onSubmit = (values: FormValues) => {
    console.log("Form values:", values);
    // Here you would typically make an API call to submit the form data
  };

  return (
    <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-lg">
        <Formik<FormValues>
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                {formType}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationLoginForm;
