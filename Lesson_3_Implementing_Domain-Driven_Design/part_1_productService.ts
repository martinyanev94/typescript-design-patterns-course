interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
}

class ProductService {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public getProduct(id: string): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}

const productService = new ProductService();
productService.addProduct({ id: '1', name: 'Widget', description: 'A useful widget', price: 19.99 });
const product = productService.getProduct('1');
console.log(product); // Outputs: { id: '1', name: 'Widget', description: 'A useful widget', price: 19.99 }
