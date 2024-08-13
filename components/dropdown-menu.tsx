import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function DropdownMenu() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className="text-lg font-medium text-orange-500 hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out mr-3 gap-2"
                >
                    Danh mục
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
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
    )
}
