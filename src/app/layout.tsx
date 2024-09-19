import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Muventi Studio Graficzne | Reklama Racibórz",
  description:
    "Postaw na profesjonalne projektowanie graficznestworzę projekt,który wyróżni Cię na tle konkurencji!sprawdź ofertę oferta LOGO/KSIĘGA ZNAKU PROJEKTOWANIEGRAFICZNE MATERIAŁYREKLAMOWE REKLAMAOUTDOOR STRONYINTERNETOWE Pełna oferta projektowanie graficzne Potrzebujesz profesjonalnych projektów graficznych do swoich materiałów reklamowych? Brakuje Ci inspiracji lub pomysłu? Jesteś we właściwym miejscu! Specjalizuję się w projektowaniu różnorodnych materiałów reklamowych, takich jak wizytówki, ulotki, plakaty, katalogi, menu, banery, RollUp&#8217;y [&hellip;]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
