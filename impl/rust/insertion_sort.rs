// Insertion Sort

/*
Theory:

Insertion Sort is a comparison-based sorting algorithm that builds the final sorted array one
element at a time. It is efficient for small data sets.

Algorithm:
   1. Start with the second element, compare it with the previous elements, and insert it
      into its correct position.
   2. Repeat the process for all elements, inserting each one into its correct position in
      the sorted portion of the array.
*/

fn insertion_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    for i in 1..n {
        let key = arr[i];
        let mut j = i as i32 - 1;
        while j >= 0 && arr[j as usize] > key {
            arr[(j + 1) as usize] = arr[j as usize];
            j -= 1;
        }
        arr[(j + 1) as usize] = key;
    }
}

fn main() {
    let mut arr = vec![12, 11, 13, 5, 6];
    insertion_sort(&mut arr);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n) (when the list is already sorted)
 *   • Average Case: O(n²)
 *   • Worst Case: O(n²)
 */
