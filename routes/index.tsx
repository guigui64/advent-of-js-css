import Main from "../layouts/Main.tsx";

export default function Home() {
  return (
    <Main title="Advent of JS/CSS 2022" headerActive="/">
      <div class="flex flex-wrap gap-4 sm:(grid grid-cols-7 gap-8)">
        {[...Array(24).keys()].map((d) => (
          <a
            href={`/day/${d + 1}`}
            class="flex items-center place-content-center bg-gradient-to-br from-green-800 to-green-600 hover:(from-red-800 to-red-600 underline) text(white 2xl) rounded-md shadow-xl h-20 w-20"
          >
            {d + 1}
          </a>
        ))}
      </div>
    </Main>
  );
}
