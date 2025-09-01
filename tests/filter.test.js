import { filterFunction } from "../src/filter";
import { originalList } from "../src/filter";

test('No input to equal "Please insert input"', () => {
    expect(filterFunction("", originalList)).toBe("Please insert input");
});

test('No original list to equal "Please insert Original List"', () => {
    expect(filterFunction("1101 1102", [])).toBe("Please insert Original List");
});

test('"1101 1102" => ["1101","1102"]', () => {
    expect(filterFunction("1101 1102", originalList)).toStrictEqual(["1101", "1102"]);
});

test('"110" => ["1101", "1102", "1103"]', () => {
    expect(filterFunction("110", originalList)).toStrictEqual(["1101", "1102", "1103"]);
});

test('"110 1103" => ["1103"]', () => {
    expect(filterFunction("110 1103", originalList)).toStrictEqual(["1103"]);
});