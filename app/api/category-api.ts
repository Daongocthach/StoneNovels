import axiosClient from "@/app/api/axios-client"
const categoryApi = {
    getCategories() {
        const url = 'the-loai'
        return axiosClient.get(url)
    },
    getcategory(slug: string) {
        const url = `truyen-tranh/${slug}`
        return axiosClient.get(url)
    },
        
}

export default categoryApi