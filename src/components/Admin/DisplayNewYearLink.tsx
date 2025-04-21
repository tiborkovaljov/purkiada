import { api } from "~/utils/api";
import { useRouter } from "next/router";

const DisplayNewYearLink = () => {
  const router = useRouter();
  const displayed = api.newYearButton.toggle.useMutation();
  const { data: state } = api.newYearButton.getAll.useQuery();

  if (!state) {
    return <div>Loading</div>;
  }

  const onSubmit = () => {
    displayed.mutate({ pressed: !state.isDisplayed });
    router.reload();
  };

  const buttonText = state?.isDisplayed
    ? "Odstranit link na nový rok"
    : "Zobrazit link na nový rok";

  const buttonIcon = state?.isDisplayed ? "⇐" : "⇒";
  const buttonColor = state?.isDisplayed ? "red" : "green";

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-max content-center p-20">
        <h1 className="text-4xl font-bold md:text-3xl text-left text-[#5480a9]">
          {buttonText}
        </h1>

        <div className="flex mt-8 gap-4 items-center justify-center">
          {!state?.isDisplayed ? (
            <button
              onClick={onSubmit}
              className={`rounded-lg px-6 py-3  text-white font-semibold transition duration-300 bg-green-500 hover:bg-green-600`}
            >
              {buttonIcon}
            </button>
          ) : (
            <button
              onClick={onSubmit}
              className={`rounded-lg px-6 py-3  text-white font-semibold transition duration-300 bg-red-500 hover:bg-red-600`}
            >
              {buttonIcon}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayNewYearLink;
