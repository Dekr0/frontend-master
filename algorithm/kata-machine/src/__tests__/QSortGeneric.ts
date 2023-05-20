import quick_sort_generic from "@code/QSortGeneric";

test("quick_sort_generic", () => {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    quick_sort_generic(arr, (a: number, b: number) => a <= b);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("quick_sort_generic", () => {
    const arr = ["b", "dc", "z", "de", "a"];
    
    quick_sort_generic(arr,(a: string, b: string) => a <= b);
    expect(arr).toEqual(arr.sort());
});
