import React from 'react';
import BookActionsCard from '@/components/book-actions-card'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from '@/components/ui/button'
interface ListActionsCardProps {
    title: string;
    is_library: boolean;
    is_follow: boolean;
    is_history: boolean;
}

const ListActionsCard: React.FC<ListActionsCardProps> = ({ title, is_library, is_follow, is_history }) => {
    return (
        <section>
            <div className='pt-10 max-w-6xl sm:px-6 px-2 mx-auto '>
                {/* Header*/}
                <div className='flex flex-row justify-between'>
                    <h3 className="text-2xl mb-4">{title}</h3>
                    {is_library && <Button variant={'outline'} className=''>Thêm</Button>}
                </div>
                {/* Image */}
                <div className="flex flex-col gap-2 w-full" >
                    <BookActionsCard is_library={is_library} is_follow={is_follow} is_history={is_history} />
                    <BookActionsCard is_library={is_library} is_follow={is_follow} is_history={is_history}/>
                    <BookActionsCard is_library={is_library} is_follow={is_follow} is_history={is_history}/>
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
    );
};

export default ListActionsCard