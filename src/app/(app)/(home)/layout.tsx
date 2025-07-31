import { getPayload } from "payload";
import configPromise from "@/payload.config";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-fiters";


interface Props {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <SearchFilters data={data} />
        <div className="flex-1 bg-[#F4F4F0]">
          {children}
        </div>
        <Footer />
    </div>
  );
}

export default Layout;