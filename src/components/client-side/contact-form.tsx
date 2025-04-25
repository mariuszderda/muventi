export const ContactForm = () => {
  // todo: create email sender function

  return (
    <form>
      <div className="flex h-20 w-full items-center border text-base font-semibold md:h-36 md:text-2xl">
        <label className="w-40 px-6 md:w-80">Imię i nazwisko:</label>
        <input
          type="text"
          className="w-full px-2 py-4 placeholder:text-site-secondary"
          placeholder="Imię i nazwisko..."
        />
      </div>
      <div className="flex h-20 w-full items-center border text-base font-semibold md:h-36 md:text-2xl">
        <label className="w-40 px-6 md:w-80">Email:</label>
        <input
          type="text"
          className="w-full px-2 py-4 placeholder:text-site-secondary"
          placeholder="Email..."
        />
      </div>
      <div className="flex h-20 w-full items-center border text-base font-semibold md:h-36 md:text-2xl">
        <label className="w-40 px-6 md:w-80">Telefon:</label>
        <input
          type="text"
          className="w-full px-2 py-4 placeholder:text-site-secondary"
          placeholder="Telefon..."
        />
      </div>
      <div className="flex min-h-20 w-full border pt-4 text-base font-semibold md:min-h-36 md:text-2xl">
        <label className="w-40 px-6 py-4 md:w-80">Wiadomość:</label>
        <textarea
          rows={5}
          className="w-full px-2 py-4 placeholder:text-site-secondary"
          placeholder="Wiadomość..."
        />
      </div>
      <button className="h-12 w-full border border-site-primary bg-site-mainGray/40 text-2xl font-bold uppercase text-site-primary md:h-36 md:text-5xl">
        Wyślij
      </button>
    </form>
  );
};
