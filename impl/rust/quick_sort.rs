// Quick Sort

/*
Theory:

Quick Sort is an efficient, comparison-based, divide-and-conquer sorting algorithm. It works
by selecting a pivot element from the array and partitioning the other elements into two
sub-arrays, according to whether they are less than or greater than the pivot.

Algorithm:
   1. Choose a pivot element (last element here).
   2. Partition the array such that elements smaller than the pivot are on the left, and
      elements greater than the pivot are on the right.
   3. Recursively apply the same process to the sub-arrays on the left and right of the pivot.
*/

fn quick_sort(arr: &mut Vec<i32>, low: usize, high: usize) {
    if low < high {
        let pi = partition(arr, low, high);
        if pi > 0 {
            quick_sort(arr, low, pi - 1);
        }
        quick_sort(arr, pi + 1, high);
    }
}

fn partition(arr: &mut Vec<i32>, low: usize, high: usize) -> usize {
    let pivot = arr[high];
    let mut i = low;
    for j in low..high {
        if arr[j] <= pivot {
            arr.swap(i, j);
            i += 1;
        }
    }
    arr.swap(i, high);
    i
}

fn main() {
    let mut arr = vec![10, 7, 8, 9, 1, 5];
    let len = arr.len();
    quick_sort(&mut arr, 0, len - 1);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n log n)
 *   • Average Case: O(n log n)
 *   • Worst Case: O(n²) (when the pivot divides the array into an extremely unbalanced partition)
 */
