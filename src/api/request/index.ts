import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

export const instance = axios.create({
    baseURL: '/',
})

// const { data, isFinished } = useAxios('/posts', instance)