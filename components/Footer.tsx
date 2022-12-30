import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import BrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-linkedin.tsx";
import BrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-discord.tsx";
import BrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-twitter.tsx";

export default function Footer() {
  /* const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ]; */

  return (
    <div class="bg-white dark:bg-gray-900 flex flex-col md:flex-row w-full max-w-screen-sm mx-auto gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1 space-y-2">
        <div class="flex items-center">
          <div class="font-bold text-xl">Advent of JS/CSS 2022</div>
        </div>
        <div class="text-gray-500">
          Assets from{" "}
          <a class="hover:underline" href="https://www.adventofcss.com/">
            adventofcss.com
          </a>
        </div>
      </div>

      {
        /* menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a class="text-gray-500 hover:text-gray-700" href={child.href}>
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )) */
      }

      <div class="text-gray-500 space-y-2 text-right">
        <div class="text-sm">
          Copyright © 2022 Guillaume Comte
        </div>

        <div class="space-x-2">
          <a
            href="https://github.com/guigui64"
            class="inline-block hover:(text-gray-700 dark:text-gray-300)"
          >
            <BrandGithub />
          </a>
          <a
            href="https://discordapp.com/users/460084244341981184"
            class="inline-block hover:(text-gray-700 dark:text-gray-300)"
          >
            <BrandDiscord />
          </a>
          <a
            href="https://www.linkedin.com/in/guillaumecomtep/"
            class="inline-block hover:(text-gray-700 dark:text-gray-300)"
          >
            <BrandLinkedin />
          </a>
          <a
            href="https://twitter.com/guillaumecomte"
            class="inline-block hover:(text-gray-700 dark:text-gray-300)"
          >
            <BrandTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
