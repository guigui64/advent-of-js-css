import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

type MainProps = {
  title: string;
  headerActive?: string;
  children?: ComponentChildren;
};

export default function Main(props: MainProps) {
  const { title, headerActive, children } = props;
  return (
    <body class="dark:bg-gray-900 dark:text-white">
      <Head>
        <title>{title}</title>
      </Head>
      <Header active={headerActive} />
      <div class="p-4 mx-auto max-w-screen-md">{children}</div>
      <Footer />
    </body>
  );
}
