console.log('hi there');
// run tsc index.ts and it will spit out a index.js
// tsc --init will generate a tsconfig.json file, you
// can specify src and build dir's and then just run
// tsc instead of tsc index.ts, or tsc -w will recompile
// on own instead of having to continue to run tsc
// then to run it you could open a separate terminal and run node build/index.js
// or can install nodemon to execute code and concurrently to help execute more than 1 script at a time
// npm init -y to get package.json and then you can add start scripts to help

var logSomething = function() {
	console.log('something');
};


class Sorter {
	// collection: number[];
	// constructor(collection: number[]) {
	//     this.collection = collection;
	// }
	// above is same as below
    constructor(public collection: number[] | string | LinkedList) {}
    // x | x | x is union type operator

	sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
                // instanceof Array is a TYPE GUARD so it only works on array
                // use instance of for non primitive types and typeof for primitive when type guarding
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						const leftHand = this.collection[j];
						this.collection[j] = this.collection[j + 1];
						this.collection[j + 1] = leftHand;
					}
                }
                // this s a TYPE GUARD to verify it's a string
                // typeof only works as a type guard for number, string, boolean, symbol
                // even though you can still use typeof to get other types like array
                if (typeof this.collection === 'string')
			}
		}
	}
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
