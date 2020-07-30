import findPackageJson from '../src/findPackageJson';

describe('findPackageJson', () => {
    it('Should find this package.json in the root', () => {
        const result = findPackageJson();
        expect(result).toEqual('./');
    });
});
