import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

// pass in obj w methods that are different for each type of collection
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
