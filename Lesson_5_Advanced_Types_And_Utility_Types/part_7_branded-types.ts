const Brand1 = Symbol('Brand1');
const Brand2 = Symbol('Brand2');

type BrandedType = { value: number } & { __brand: typeof Brand1 };
type AnotherBrandedType = { value: number } & { __brand: typeof Brand2 };

function useBrandedType(branded: BrandedType) {
    console.log(branded.value);
}

// Create a valid branded type
const validBrand: BrandedType = { value: 100, __brand: Brand1 };
// Trying to pass an instance of AnotherBrandedType will throw an error
const invalidBrand: AnotherBrandedType = { value: 200, __brand: Brand2 };

// useBrandedType(invalidBrand) // Uncommenting this line will not compile
useBrandedType(validBrand);
