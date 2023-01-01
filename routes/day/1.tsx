import { CSS, render } from "$gfm";
import { asset } from "$fresh/runtime.ts";
import Main from "../../layouts/Main.tsx";
import Pomodoro from "../../islands/Pomodoro.tsx";

const reqs = `# Brief

In this project, we're creating a Pomodoro timer.

You can use as many (or as few) tools, libraries, and frameworks as you'd like. If you're trying to learn something new, this might be a great way to push yourself.

**Users should be able to:**

- Start the timer by clicking on the start link/button.
- Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop.
- Click on the gear icon to change the length (minutes and seconds) of the timer.
- Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser.
`;

export default function Day1() {
  return (
    <Main
      headChildren={
        <>
          <link rel="stylesheet" href={asset("/fonts.css")} />
          <style dangerouslySetInnerHTML={{ __html: CSS }} />
        </>
      }
      title="2022/01 Pomodoro"
    >
      <Pomodoro />
      <div id="requirements" class="mt-8">
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(reqs) }}
        />
      </div>
    </Main>
  );
}
