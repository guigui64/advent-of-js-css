import { signal } from "@preact/signals";
import { asset } from "$fresh/runtime.ts";

const state = signal<"stopped" | "running" | "finished">("stopped");
const editing = signal(false);
const timer = signal(-1);
const config = { minutes: signal(15), seconds: signal(0) }; // store previous config when resetting after finished
const time = { minutes: signal(15), seconds: signal(0) }; // real minutes and seconds set as timer

function saveConfig() {
  config.minutes.value = time.minutes.value;
  config.seconds.value = time.seconds.value;
}

function resetTimer() {
  time.minutes.value = config.minutes.value;
  time.seconds.value = config.seconds.value;
}

function finish() {
  time.minutes.value = 0;
  time.seconds.value = 0;
  state.value = "finished";
  clearInterval(timer.value);
  setTimeout(() => alert("Timer finished!"), 100);
}

function tick() {
  let [minutes, seconds] = [time.minutes.value, time.seconds.value];
  if (minutes === 0 && seconds === 1) {
    finish();
    return;
  }
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  time.minutes.value = minutes;
  time.seconds.value = seconds;
}

function pad(n: number) {
  if (n < 10) {
    return "0" + n;
  }
  return "" + n;
}

export default function Pomodoro() {
  return (
    <div
      id="frame"
      class="flex items-center justify-center"
      style={{ minHeight: "35rem", background: "#2b2a30" }}
    >
      <div
        id="wrapper"
        class="flex items-center justify-center rounded-full relative"
        style={{
          minHeight: "24rem",
          minWidth: "24rem",
          boxShadow:
            "-5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15)",
        }}
      >
        <div
          id="ring"
          class="absolute left-0 top-0 z-10 h-full w-full"
          style={{ stroke: state.value === "finished" ? "#900a0a" : "#09a65a" }}
        >
          <svg viewBox="0 0 518 518">
            <circle
              stroke-width="8px"
              x="0"
              y="y"
              cx="259"
              cy="259"
              r="254"
            />
          </svg>
        </div>

        <div
          id="timer"
          class="flex flex-col items-center justify-center rounded-full relative z-20 text-white space-y-4"
          style={{
            minHeight: "calc(24rem - 12px)",
            minWidth: "calc(24rem - 12px)",
            boxShadow: "inset 0px 0px 114px rgba(0, 0, 0, 0.45)",
            background:
              "radial-gradient(71.4% 71.4% at 51.7% 28.6%, #3A393F 0%, #17171A 100%)",
          }}
        >
          <div
            id="time"
            class="flex text-9xl"
            style={{
              fontFamily: "bebas",
            }}
          >
            <div id="minutes">
              <input
                type="text"
                class={`${
                  editing.value ? "border-b" : "border-b-0"
                } border-dashed border-white bg-transparent w-24 text-right`}
                value={time.minutes.value}
                onChange={(e) => {
                  time.minutes.value = parseInt(
                    (e.target as HTMLInputElement).value,
                  );
                }}
                disabled={!editing.value}
              />
            </div>
            <div id="colon">:</div>
            <div id="seconds">
              <input
                type="text"
                class={`${
                  editing.value ? "border-b" : "border-b-0"
                } border-dashed border-white bg-transparent w-24 text-right`}
                value={pad(time.seconds.value)}
                onChange={(e) => {
                  time.seconds.value = parseInt(
                    (e.target as HTMLInputElement).value,
                  );
                }}
                disabled={!editing.value}
              />
            </div>
          </div>
          {editing.value || (
            <button
              id="start"
              class={"cursor-pointer text-lg tracking-widest opacity-50 hover:opacity-100 border-0 uppercase focus:outline-none" +
                (state.value === "running" ? " pb-10" : "")}
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
              onClick={() => {
                if (state.value === "finished") {
                  resetTimer();
                }
                const newState = state.value === "running"
                  ? "stopped"
                  : "running";
                if (newState === "running") {
                  timer.value = setInterval(tick, 1000);
                } else {
                  clearInterval(timer.value);
                }
                state.value = newState;
              }}
            >
              {state.value === "running" ? "stop" : "start"}
            </button>
          )}
          {state.value !== "running" && (
            <button
              id="settings"
              class={"cursor-pointer opacity-50 hover:opacity-100 border-0 focus:outline-none" +
                (editing.value ? " pt-11" : "")}
              onClick={() => {
                editing.value = !editing.value;
                if (editing.value === false) {
                  saveConfig();
                } else {
                  if (state.value === "finished") {
                    resetTimer();
                  }
                }
              }}
            >
              <img
                class="w-6"
                src={asset(
                  `/images/${editing.value ? "check" : "gear"}.svg`,
                )}
                alt="Settings"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
