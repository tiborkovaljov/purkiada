const Contact = () => {
  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-center p-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold md:text-6xl">
            <p className="text-[#5480a9]">Kontakt</p>
          </h1>
          <br />
          <p>
            V případě jakýchkoliv dotazů ohledně Purkiády nás neváhej
            kontaktovat přes e-mail
            <a
              href="mailto:lenka.hruskova@purkynka.cz"
              className="text-[#5480a9]"
            >
              <span> lenka.hruskova@purkynka.cz</span>
            </a>
          </p>
          <br />
          <h1 className="text-3xl font-bold">
            <p className="text-[#5480a9]">Kontakt na školu</p>
          </h1>
          <a href="mailto:posta@purkynka.cz" className="text-[#5480a9]">
            posta@purkynka.cz
          </a>
          <p>+420 541 649 111</p>
          <p>Datová schránka: 87wit9v</p>
          <br />
          <p>IČO: 155 30 213</p>
          <p>DIČ: CZ155 30 213</p>
          <p>RED-IZO: 600 171 027</p>
        </div>
        <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.7047312226005!2d16.57836477686252!3d49.22512657482769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129403c69be65b%3A0xd9c7d91a683162ab!2zU3TFmWVkbsOtIHByxa9teXNsb3bDoSDFoWtvbGEgQnJubywgUHVya3nFiG92YSwgcMWZw61zcMSbdmtvdsOhIG9yZ2FuaXphY2U!5e0!3m2!1scs!2scz!4v1740434408971!5m2!1scs!2scz"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
