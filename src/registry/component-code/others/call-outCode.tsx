export const CallOutCode = 'import React from "react";\r\nimport {\r\n  Card,\r\n  CardContent,\r\n  CardDescription,\r\n  CardFooter,\r\n  CardHeader,\r\n  CardTitle,\r\n} from "@/components/ui/card";\r\nimport Image from "next/image";\r\nimport { Button } from "@/components/ui/button";\r\nimport { Send, TrendingUp, Zap } from "lucide-react";\r\n\r\nconst CallOutSection = () => {\r\n  return (\r\n    <div className="w-[90dvw] justify-center mx-auto flex flex-col items-center py-10  ">\r\n      <Card className="md:flex bg-muted items-center md:w-[1000px] bg-gradient-to-r from-card to-muted relative">\r\n        <CardContent className="flex flex-col p-10 items-start">\r\n          {/* <div className="-z-10 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}\r\n          <h2 className="text-3xl font-semibold ">\r\n            Build beautiful websites faster\r\n          </h2>\r\n          <CardDescription>\r\n            SuperDev Pro has been extensively used while building this website,\r\n            so if you love this website, you will love SuperDev Pro too. Join\r\n            web developers and designers from 34+ countries who have already\r\n            said goodbye to tedious debugging with Inspect Element.\r\n          </CardDescription>\r\n          {/* </CardHeader> */}\r\n          <Button className="mt-5">Get it for free</Button>\r\n        </CardContent>\r\n        <CardFooter>\r\n          {/* <Image\r\n            src={"/glassmorphic.png"}\r\n            height={600}\r\n            width={600}\r\n            alt="abs img"\r\n            className="hidden md:block"\r\n          /> */}\r\n          <div className="bg-primary/10 p-5 rounded-full hidden md:block">\r\n            <Zap className="text-primary size-28" />\r\n          </div>\r\n        </CardFooter>\r\n      </Card>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CallOutSection;\r\n';
