export const ContactForm = () => {
  return (
    <form>
      <div className="flex h-36 w-full items-center border text-2xl font-semibold">
        <label className="w-80 pl-6">Imię i nazwisko:</label>
        <input
          type="text"
          className="w-full placeholder:text-site-secondary"
          placeholder="Imię i nazwisko..."
        />
      </div>
      <div className="flex h-36 w-full items-center border text-2xl font-semibold">
        <label className="w-80 pl-6">Email:</label>
        <input
          type="text"
          className="w-full placeholder:text-site-secondary"
          placeholder="Email..."
        />
      </div>
      <div className="flex h-36 w-full items-center border text-2xl font-semibold">
        <label className="w-80 pl-6">Telefon:</label>
        <input
          type="text"
          className="w-full placeholder:text-site-secondary"
          placeholder="Telefon..."
        />
      </div>
      <div className="flex min-h-36 w-full border pt-4 text-2xl font-semibold">
        <label className="w-80 pl-6">Wiadomość:</label>
        <textarea
          rows={5}
          className="w-full placeholder:text-site-secondary"
          placeholder="Wiadomość..."
        />
      </div>
      <button className="h-36 w-full border border-site-primary bg-site-mainGray/40 text-5xl font-bold uppercase text-site-primary">
        Wyślij
      </button>
    </form>
  );
};
