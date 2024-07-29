import Menu from "@/components/Menu";
import Dnav from "../../components/Dnav";
import Copyright from "../../components/Mini Component/Copyright";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply font class and dark mode background */}
      <div className="flex justify-normal">
        <div>
          <Dnav />
        </div>
        <div className="w-72 flex mt-16">
          <Menu />
        </div>
        <div className="mt-16 relative overflow-x-auto shadow-md sm:rounded-lg">
          <div>
            {" "}
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </div>
      <div className="">
        {" "}
        <Copyright />
      </div>
    </html>
  );
}
