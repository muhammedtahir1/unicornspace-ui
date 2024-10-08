import { ScrollArea } from "@/components/ui/scroll-area";
import { componentsSidebarData } from "@/config/components";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start overflow-x-hidden ">
      <aside className=" -ml-2 hidden h-[calc(100vh-3.5rem)] md:block border-r w-72">
        <ScrollArea className="h-full py-6 px-5 pr-6 lg:py-8">
          {componentsSidebarData.map((item, i) => (
            <div className="flex flex-col" key={i}>
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {item.title}
              </h4>
              {item.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="rounded-md text-[13px] border border-transparent px-2 pl-3 py-1  hover:underline font-light text-muted-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}
