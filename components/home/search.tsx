import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function Search() {
  return (
    <section>
      <div className="pt-24 max-w-3xl mx-auto flex flex-row items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Input type="email" placeholder="Tìm kiếm..." className="w-full h-10 rounded-full border-purple-600 border-2"/>
          </PopoverTrigger>
          <PopoverContent className="bg-gray-900 w-max" align="start">
            <div className="">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer. asdgasdgasddg
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <MagnifyingGlassIcon className="w-10 h-10 rounded-full cursor-pointer text-purple-700"/>
      </div>
    </section>
  )
}
