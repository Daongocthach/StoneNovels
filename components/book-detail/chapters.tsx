import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

function Chapters() {
    return (
        <section className="pt-10">
            <hr className="bg-white max-w-6xl mx-auto" />
            <div className="pt-5 max-w-6xl mx-auto px-1 sm:px-6">
                <h5 className='h4 mb-5'>Danh sách chương</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ul className="space-y-2">
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 1:</span> Cương thi
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 2:</span> Quỷ santan
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 1:</span> Cương thi
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 2:</span> Quỷ santan
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 1:</span> Cương thi
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 2:</span> Quỷ santan
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 1:</span> Cương thi
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 2:</span> Quỷ santan
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 1:</span> Cương thi
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 2:</span> Quỷ santan
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 1:</span> Cương thi
                        </li>
                        <li className="text-white text-base relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-400 inline-block w-28">Chương 2:</span> Quỷ santan
                        </li>
                    </ul>
                </div>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    )
}

export default Chapters