type Props = {
  active?: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Calendar", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div class="bg-white dark:bg-gray-900 w-full max-w-screen-lg mx-auto py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        🎄
        <div class="text-2xl ml-1 font-bold dark:text-white">
          Advent of JS/CSS 2022
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
