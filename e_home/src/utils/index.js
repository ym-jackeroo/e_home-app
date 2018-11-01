import axios from 'axios'

const baseURL = 'http://211.67.177.56:8080/hhdj'

const instance = axios.create({
    baseURL,
    timeout: 15000
})

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem('token')
            let computedConfig = {
                ...config
            }
            if(token) {
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            console.log(computedConfig)
            instance.get(url, {params: data, ...computedConfig}).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem('token')
            let computedConfig = {
                ...config
            }
            if(token) {
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            instance[methods](url, data, computedConfig).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    }
}

export default xhr;