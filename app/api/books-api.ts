import axiosClient from "@/app/api/axios-client"
const bookApi = {
    getBooks() {
        const url = 'home'
        return axiosClient.get(url)
    },
    getBooksByStatus(status: string, page: number) {
        const url = `danh-sach/${status}?page=${page}`
        return axiosClient.get(url)
    },
    getBooksByCategory(category: string, page: number) {
        const url = `the-loai/${category}?page=${page}`
        return axiosClient.get(url)
    },
    getBook(slug: string) {
        const url = `truyen-tranh/${slug}`
        return axiosClient.get(url)
    },
    getBookChapter(slug: string) {
        const url = `truyen-tranh/${slug}/chuong`
        return axiosClient.get(url)
    },
    searchBooks(keyword: string, page: number) {
        const url = `tim-kiem?keyword=${keyword}&page=${page}`
        return axiosClient.get(url)
    }
        
}

export default bookApi