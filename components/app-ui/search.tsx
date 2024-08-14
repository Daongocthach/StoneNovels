'use client'
import React, { useState } from "react"
import { Input } from "@/components/ui/input"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MagnifyingGlassIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
export default function Search() {
  const [searchText, setSearchText] = useState("")

  const filteredNames = fakeName.filter((name) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  )
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <section>
      <div className="ml-4 flex-row items-center gap-2 w-full hidden md:flex ">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex flex-row items-center justify-end relative w-full">
              <Input
                type="email"
                placeholder="Tìm kiếm..."
                className="w-full h-10 rounded-full bg-slate-700 border-0"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute w-7 h-7 right-1 rounded-full cursor-pointer text-gray" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-gray-900 w-max" align="start">
          <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
            {/* <div>
              {filteredNames.map((name, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {name}
                </p>
              ))}
            </div> */}
          </PopoverContent>
        </Popover> 
       

      </div>
    </section>
  )
}
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
const fakeName = [
  'Ta thiên mệnh đại phản phái',
  'Đấu La Đại Lục',
  'Thiên Long Bát Bộ',
  'Tiên Hiệp',
  'Ngạo Kiếm Thần Vương',
  'Võ Thần Chúa Tể',
  'Đại Chúa Tể',
  'Tối Cường Phản Sáo Lộ Hệ Thống',
  'Vô Địch Đại Lục',
  'Bách luyện thành thần',
  'Doraemon',
  'Naruto',
  'One Piece',
  'Dragon Ball',
  'Conan',
  'Detective Conan',
  'Grand Blue',
  'Death Note',
  'Attack on Titan',
  'Shingeki no Kyojin',
  'Tokyo Ghoul',
  'One Punch man',
  'My Hero Academia',
  'Boku no Hero Academia',
  'Black Clover',
  'Dr. Stone',
  'The Promised Neverland',
  'Hunter x Hunter',
  'Fullmetal Alchemist',
  'Fairy Tail',
  'Sword Art Online',
  'Kimetsu no Yaiba',
  'Demon Slayer',
  'Re:Zero',
  'Overlord',
  'No Game No Life',
  'Tensei Shitara Slime Datta Ken',
  'That Time I Got Reincarnated as a Slime',
  'KonoSuba',
  'Kono Subarashii Sekai ni Shukufuku wo!',
  'Code Geass',
  'SteinsGate',
  'Neon Genesis Evangelion',
  'Evangelion',
  'Cowboy Bebop',
  'Gintama',
  'Bleach',
  'Dragon Ball Z',
  'Dragon Ball Super',
  'Dragon Ball GT',
  'Dragon Ball Kai',
  'Dragon Ball Z Kai',
  'Dragon Ball Super',
  'Evergadern',
  'Lục mạch thần kiếm',
  'Trùng sinh',
  'Hồi quy',
  'Trọng sinh',
  'Võng du',
  'Kiếm thần'
]