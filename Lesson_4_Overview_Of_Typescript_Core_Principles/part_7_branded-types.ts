const Brand1 = Symbol('Brand1');
const Brand2 = Symbol('Brand2');

type BrandedType = { value: number } & { __brand: typeof Brand1 };
type AnotherBrandedType = { value: number } & { __brand: typeof Brand2 };

function useBrandedType(branded: BrandedType) {
    console.log(branded.value);
}

// This will throw an error since they are distinct types
const validBrand: BrandedType = { value: 100, __brand: Brand1 };
const invalidBrand: AnotherBrandedType = { value: 200, __brand: Brand2 };

useBrandedType(validBrand);
// useBrandedType(invalidBrand) // Error: Argument of type 'AnotherBrandedType' is not assignable.
