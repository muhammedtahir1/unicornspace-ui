export const Navbar1Code = 'import React from "react";\r\nimport { GiHamburgerMenu } from "react-icons/gi";\r\nimport {\r\n  Sheet,\r\n  SheetContent,\r\n  SheetDescription,\r\n  SheetHeader,\r\n  SheetTitle,\r\n  SheetTrigger,\r\n} from "@/components/ui/sheet";\r\n\r\nimport Link from "next/link";\r\nimport Image from "next/image";\r\nimport { Button } from "../../../components/ui/button";\r\n\r\nconst Navbar = () => {\r\n  return (\r\n    <header className="py-7 flex justify-between px-16 items-center  z-10">\r\n      <div>\r\n        <h3 className="text-3xl font-semibold flex items-center">\r\n          <Image\r\n            src={"/logos/logo-black-256x256.png"}\r\n            height={50}\r\n            width={50}\r\n            alt="abs img"\r\n            className="hidden md:block"\r\n          />{" "}\r\n          UnicornSpace\r\n        </h3>\r\n      </div>\r\n      <nav className="text-white/70 text-sm sm:flex gap-2 hidden">\r\n        <Link href={"#"}>Features</Link>\r\n        <Link href={"#"}>Pricing</Link>\r\n        <Link href={"#"}>Roadmap</Link>\r\n        <Link href={"#"}>Changelog</Link>\r\n      </nav>\r\n      <div className="sm:flex  hidden gap-2">\r\n        <Link href={"/login"}>\r\n          <Button variant={"outline"}>Login</Button>\r\n        </Link>\r\n        <Link href={"signup"}>\r\n          <Button variant={"default"}>Get started now</Button>\r\n        </Link>\r\n      </div>\r\n      <div className="md:hidden">\r\n        <Sheet key={"left"}>\r\n          <SheetTrigger>\r\n            <GiHamburgerMenu size={32} />\r\n          </SheetTrigger>\r\n          <SheetContent>\r\n            <SheetHeader>\r\n              <SheetTitle>Menu</SheetTitle>\r\n              <SheetDescription className="flex flex-col justify-between h-[85vh]">\r\n                n\r\n                <div className="flex gap-5 justify-center">\r\n                  <Button variant={"outline"}>Login</Button>\r\n                  <Button>Get started</Button>\r\n                </div>\r\n              </SheetDescription>\r\n            </SheetHeader>\r\n          </SheetContent>\r\n        </Sheet>\r\n      </div>\r\n    </header>\r\n  );\r\n};\r\n\r\nexport default Navbar;\r\n';
