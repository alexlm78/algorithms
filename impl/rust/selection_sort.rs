// Selection Sort

/*
Theory:

Selection Sort is a simple comparison-based sorting algorithm. It repeatedly selects the
smallest element from the unsorted portion of the array and swaps it with the first unsorted
element. This process continues until the entire array is sorted.

Algorithm:
   1. Start with the first element and search the array to find the minimum element.
   2. Swap the minimum element with the first element.
   3. Move to the next position and repeat the process until the array is sorted.
*/

fn selection_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    for i in 0..n - 1 {
        let mut min_index = i;
        for j in i + 1..n {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }
        arr.swap(i, min_index);
    }
}

fn main() {
    let mut arr = vec![64, 25, 12, 22, 11];
    selection_sort(&mut arr);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n²)
 *   • Average Case: O(n²)
 *   • Worst Case: O(n²)
 */
