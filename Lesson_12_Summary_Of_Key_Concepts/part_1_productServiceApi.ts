interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductRepository {
    getProducts(): Product[];
}

class ProductAPI implements ProductRepository {
    private products: Product[] = [
        { id: 1, name: "Product A", price: 99.99 },
        { id: 2, name: "Product B", price: 149.99 },
    ];

    getProducts(): Product[] {
        return this.products;
    }
}

class ProductService {
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    displayProducts(): void {
        const products = this.repository.getProducts();
        products.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
        });
    }
}

const api = new ProductAPI();
const productService = new ProductService(api);
productService.displayProducts();
