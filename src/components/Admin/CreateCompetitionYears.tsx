import { api } from '~/utils/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  yearName: string;
  fileName: string;
  resultsLink: string;
}

const CreateCompetitionYears = () => {
  const mutate = api.competitionAssignments.create.useMutation({
    onSuccess: () => {
      console.log('Success');
    },
    onError: () => {
      console.log('Failure');
    },
  });

  const onSubmit = (values: FormValues) => {
    mutate.mutate({
      yearName: parseInt(values.yearName),
      fileLink: values.fileName,
      resultsLink: values.resultsLink,
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-max content-center p-20">
          <h1 className="text-4xl font-bold md:text-3xl text-left text-[#5480a9]">
            Přidat ročník
          </h1>
          <div>
            <Formik
              initialValues={{ yearName: '', fileName: '', resultsLink: '' }}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="mt-8 gap-4 items-center justify-center">
                  <div className="flex flex-col p-5">
                    Ročník (např. 2024)
                    <Field
                      type="text"
                      name="yearName"
                      placeholder="text"
                      className="border p-2 rounded"
                    />
                    <ErrorMessage
                      name="yearName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    Jméno souboru v public/competition_assignments
                    <Field
                      type="text"
                      name="fileName"
                      placeholder="text"
                      className="border p-2 rounded"
                    />
                    <ErrorMessage
                      name="fileName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    Jméno souboru v public/competition_results
                    <Field
                      type="text"
                      name="resultsLink"
                      placeholder="text"
                      className="border p-2 rounded"
                    />
                    <ErrorMessage
                      name="resultsLink"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Vytvořit ročník
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompetitionYears;
