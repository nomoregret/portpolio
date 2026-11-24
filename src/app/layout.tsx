import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import SmoothScroll from "./_components/SmoothScroll/SmoothScroll";
import "@ui/styles/globals.scss";

export const metadata: Metadata = {
  title: "나영준 포트폴리오",
  description: "프론트엔드 퍼블리싱 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* 첫 페인트 전에 스크롤 모션 여부를 정해 reveal 요소가 깜빡이지 않게 한다 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("has-scroll-motion")`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
