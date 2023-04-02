import { random, size } from 'lodash';

const colorClasses = [
	'hover:text-pink-700 hover:bg-pink-50',
	'hover:text-purple-700 hover:bg-purple-50',
	'hover:text-blue-700 hover:bg-blue-50',
	'hover:text-green-700 hover:bg-green-50',
	'hover:text-orange-700 hover:bg-orange-50',
	'hover:text-yellow-700 hover:bg-yellow-50',
	'hover:text-teal-700 hover:bg-teal-50',
	'hover:text-red-700 hover:bg-red-50',
	'hover:text-indigo-700 hover:bg-indigo-50'
];

let index = random(size(colorClasses));

/**
 * If you're wondering why this is a function that returns a function, it's because
 * we want to be able to call this function multiple times and get a different color
 * each time. If we just exported the array, we'd get the same color every time.
 *
 * We also want to make sure that we don't get the same color twice in a row, so
 * we keep track of the index in here.
 * @returns {() => string} - A random color class from the list of color classes
 */
export const createColorClassGenerator = () => {
	return () => {
		if (index === colorClasses.length) {
			index = 0;
		}
		return colorClasses[index++];
	};
};
