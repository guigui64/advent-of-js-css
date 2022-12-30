import { PageProps } from "$fresh/server.ts";
import Main from "../../layouts/Main.tsx";

export default function MissingDay(props: PageProps) {
  const { day } = props.params;
  return (
    <Main title={`Advent of JS/CSS 2022/${day}`}>
      <p>
        Sorry, day {day} is not implemented yet...{" "}
        <a class="hover:underline" href="/">Go back to calendar.</a>
      </p>
    </Main>
  );
}
