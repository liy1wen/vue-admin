import axios from '@/utils/request'

export const getList = params => axios.get('/vue-admin-template/table/list', { params })

