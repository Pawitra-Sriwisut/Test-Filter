// Original list
export const originalList = ["1101", "1102", "1103"];

// Filter function
export const filterFunction = (input, list = []) => {
    if (!input) {
        return "Please insert input";
    }
    if (list.length <= 0) {
        return "Please insert Original List";
    }
    const arraySplit = input.split(" ");
    // Check length string
    if (arraySplit.every((item) => item.length === arraySplit[0].length)) {
        // Filter original list using startsWith
        return originalList.filter(list => arraySplit.some(filter => list.startsWith(filter)));
    }
    else {
        // Filter original list match any value in arraySplit
        return originalList.filter(list => arraySplit.some(filter => list === filter));
    }
};

console.log(filterFunction("1101 1102", originalList));
console.log(filterFunction("110", originalList));
console.log(filterFunction("110 1103", originalList));
