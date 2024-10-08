export const TextAppearOnScrollCode = '"use client";\r\nimport { motion, useScroll, useTransform } from "framer-motion";\r\nimport React, { useRef } from "react";\r\n\r\nfunction TextAppearOnScroll({\r\n  text = "Unicorn Space Build faster, smarter, and more efficiently.Meet UnicornSpaceUI, the library for all your daily tool for all Nextjs and Web Development. Focus on getting things done, not re-inventing again and again.",\r\n}: {\r\n  text?: string;\r\n}) {\r\n  const container = useRef(null);\r\n\r\n  const { scrollYProgress } = useScroll({\r\n    target: container,\r\n\r\n    offset: ["start 0.9", "start 0.2"],\r\n  });\r\n\r\n  const words = text.split(" ");\r\n\r\n  return (\r\n    <p ref={container} className={"flex flex-wrap font-medium text-3xl"}>\r\n      {words.map((word: string, i: number) => {\r\n        const start = i / words.length;\r\n\r\n        const end = start + 1 / words.length;\r\n\r\n        return (\r\n          <Word key={i} progress={scrollYProgress} range={[start, end]}>\r\n            {word}\r\n          </Word>\r\n        );\r\n      })}\r\n    </p>\r\n  );\r\n}\r\n\r\nconst Word = ({ children, progress, range }: any) => {\r\n  const opacity = useTransform(progress, range, [0, 1]);\r\n\r\n  return (\r\n    <span className={"relative mr-3"}>\r\n      <span className={"absolute opacity-20"}>{children}</span>\r\n\r\n      <motion.span style={{ opacity: opacity }}>{children}</motion.span>\r\n    </span>\r\n  );\r\n};\r\nexport default TextAppearOnScroll;\r\n';
