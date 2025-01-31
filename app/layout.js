import Navbar from "@/components/startPage/nav";
import "./globals.css";

export const metadata = {
  title: "Pet Groomer",
  description: "Pet Grooming Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="all-container">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
