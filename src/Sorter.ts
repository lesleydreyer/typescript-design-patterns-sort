// don't need the interface anymore but leaving for reference
// interface Sortable {
// 	length: number;
// 	compare(leftIndex: number, rightIndex: number): boolean;
// 	swap(leftIndex: number, rightIndex: number): void;
// }

// interfaces
// sets up a contract b/n diff classes
// use when have very diff objects that we want to work together
// promotes loose coupling

// inheritance/abstract classes
// sets up a contract b/n diff classes
// use when trying to build a definition of an object
// strongly couples classes together

// in general reach for interfaces first unless you have diff objects that are very closely related

// abstract classes cannot be used to create an object directly, they can only be parent classes, can contain
// real implementation for methods that can refer to other methods that don't exist yet (but have to provide
// names and types for un-implemented methods) - can make child classes promise to implement some
// good for providing reusable implementation of a function but that f might depend on other functions
// that cannot yet implement because they may be different depending on the different child classes that use it
// you don't have to have all the properties - the child class can
// provide the compare/swap/length implementation
export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
