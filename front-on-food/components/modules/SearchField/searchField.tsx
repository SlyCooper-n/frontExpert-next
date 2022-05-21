import { IconFilter } from "@/icons";
import { Menu } from "@headlessui/react";
import LinkItem from "./linkItem";

export function SearchField() {
  return (
    <Menu as="section" className="mx-auto font-semibold">
      <Menu.Button className="mx-auto flex w-full max-w-lg items-center justify-between rounded-full bg-white p-2 pl-8 text-[#777] shadow transition-colors hover:bg-gray-200">
        Select a city to start{" "}
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500">
          <IconFilter className="h-4 w-4 fill-white" />
        </span>
      </Menu.Button>

      <Menu.Items className="relative mx-auto w-full max-w-md">
        <div className="absolute z-50 mt-3 w-full overflow-hidden rounded-xl bg-white shadow">
          <Menu.Item>
            <LinkItem
              href="/discover/sao-paulo-sp"
              className="block border-b border-[#e7e7e7] px-6 py-4 text-sm text-[#333] transition-colors hover:bg-[#f3f3f3]"
            >
              São Paulo, SP
            </LinkItem>
          </Menu.Item>

          <Menu.Item>
            <LinkItem
              href="/discover/florianopolis-sc"
              className="block border-b border-[#e7e7e7] px-6 py-4 text-sm text-[#333] transition-colors hover:bg-[#f3f3f3]"
            >
              Florianópolis, SC
            </LinkItem>
          </Menu.Item>

          <Menu.Item>
            <LinkItem
              href="/discover/porto-alegre-rs"
              className="block border-[#e7e7e7] px-6 py-4 text-sm text-[#333] transition-colors hover:bg-[#f3f3f3]"
            >
              Porto ALegre, RS
            </LinkItem>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
