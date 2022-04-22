import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

const path = require('path')
export default defineConfig({
    plugins:[vue()],
    resolve:{
        alias:{
            '@': path.resolve(__dirname, 'src'),
            '~':path.resolve(__dirname,'.')
        }
    },
    proxy:{
        '/api':{
            target:'http://www.baidu.com',
            changeOrigin: true,//允许跨域
            rewrite:path => path.replace(/^\/api/,'')
        }
    }
})