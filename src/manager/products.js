
 import path from 'path' 
 import fs from 'node:fs'
 import __dirname from '../../utils.js'

class ProductManager{
    constructor(path){
        this.path=path
    }

   async getAll(){
        const response= await fs.promises.readFile(this.path, 'utf-8')
        return JSON.parse(response)
    }
}


const prods= new ProductManager(path.join(__dirname, '/src' , '/products.json'))


export default prods