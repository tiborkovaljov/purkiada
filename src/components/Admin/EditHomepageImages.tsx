import { api } from '~/utils/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  imageUrl: string;
  altText: string;
}

const HomepageImagesForm = (props: { title: string }) => {
  const mutate = api.homepageImages.update.useMutation({
    onSuccess: () => {
      console.log('Success');
    },
    onError: () => {
      console.log('Failure');
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    mutate.mutate({
      title: props.title,
      imageUrl: values.imageUrl,
      altText: values.altText,
    });
  };

  return (
    <div>
      <Formik initialValues={{ imageUrl: '', altText: '' }} onSubmit={onSubmit}>
        {() => (
          <Form className="mt-8 gap-4 items-center justify-center">
            <div className="flex flex-col gap-5 p-5">
              <label>{props.title}</label>
              <div className="flex flex-row">
                <Field
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                  className="border p-2 rounded"
                />
                <div className="pl-2">
                  <Field
                    type="text"
                    name="altText"
                    placeholder="Alt Text"
                    className="border p-2 rounded"
                  />
                </div>
              </div>
              <ErrorMessage
                name="imageUrl"
                component="div"
                className="text-red-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Upravit obrázek
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const EditHomepageImages = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-max content-center p-20">
          <h1 className="text-4xl font-bold md:text-3xl text-left text-[#5480a9]">
            Upravit obrázky na homepage
          </h1>
          <div>
            <HomepageImagesForm title={'Purkiáda logo img'} />
            <HomepageImagesForm title={'Purkiáda about img'} />
            <HomepageImagesForm title={'Purkiáda historie img'} />
            <HomepageImagesForm title={'Purkiáda budova img'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomepageImages;
