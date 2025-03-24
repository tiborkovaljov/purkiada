import { api } from '~/utils/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  imageUrl: string;
  altText: string;
}

const EditHomepageImages = () => {
  const mutate = api.homepageImages.update.useMutation({
    onSuccess: () => {
      console.log('Success');
    },
    onError: () => {
      console.log('Failure');
    },
  });

  const onSubmit = (values: FormValues) => {
    mutate.mutate({
      imageUrl: values.imageUrl,
      altText: values.altText,
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-max content-center p-20">
          <h1 className="text-4xl font-bold md:text-3xl text-left text-[#5480a9]">
            Upravit obrázky na homepage
          </h1>
          <div>
            <Formik
              initialValues={{ imageUrl: '', altText: '', title: '' }}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="mt-8 gap-4 items-center justify-center">
                  <div className="flex flex-col gap-5 p-5">
                    Logo
                    <div className="flex flex-row">
                      <Field
                        type="text"
                        name="imageUrlLogo"
                        placeholder="text"
                        className="border p-2 rounded"
                      />
                      <div className="pl-2">
                        <Field
                          type="text"
                          name="altTextLogo"
                          placeholder="text"
                          className="border p-2 rounded"
                        />
                      </div>
                      <ErrorMessage
                        name="imageUrlLogo"
                        component="div"
                        className="text-red-500"
                      />
                      <div className="pl-2">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Změnit fotku
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-5">
                    About fotka
                    <div className="flex flex-row">
                      <Field
                        type="text"
                        name="imageUrlAbout"
                        placeholder="text"
                        className="border p-2 rounded"
                      />
                      <div className="pl-2">
                        <Field
                          type="text"
                          name="altTextAbout"
                          placeholder="text"
                          className="border p-2 rounded"
                        />
                      </div>
                      <ErrorMessage
                        name="imageUrlAbout"
                        component="div"
                        className="text-red-500"
                      />
                      <div className="pl-2">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Změnit fotku
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-5">
                    Historie fotka
                    <div className="flex flex-row">
                      <Field
                        type="text"
                        name="imageUrlHistory"
                        placeholder="text"
                        className="border p-2 rounded"
                      />
                      <div className="pl-2">
                        <Field
                          type="text"
                          name="altTextHistory"
                          placeholder="text"
                          className="border p-2 rounded"
                        />
                      </div>
                      <ErrorMessage
                        name="imageUrlHistory"
                        component="div"
                        className="text-red-500"
                      />
                      <div className="pl-2">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Změnit fotku
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-5">
                    Informace o škole fotka
                    <div className="flex flex-row">
                      <Field
                        type="text"
                        name="imageUrlInfo"
                        placeholder="text"
                        className="border p-2 rounded"
                      />
                      <div className="pl-2">
                        <Field
                          type="text"
                          name="altTextInfo"
                          placeholder="text"
                          className="border p-2 rounded"
                        />
                      </div>
                      <ErrorMessage
                        name="imageUrlInfo"
                        component="div"
                        className="text-red-500"
                      />
                      <div className="pl-2">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Změnit fotku
                        </button>
                      </div>
                    </div>
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

export default EditHomepageImages;
