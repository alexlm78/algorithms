// Merge Sort

/*
Theory:

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves,
recursively sorts the two halves, and then merges them to produce the sorted array.

Algorithm:
   1. Divide the unsorted array into two halves.
   2. Recursively sort both halves.
   3. Merge the two halves back together.
*/

fn merge_sort(arr: &mut Vec<i32>) {
    let len = arr.len();
    if len <= 1 {
        return;
    }
    let mid = len / 2;
    let mut left = arr[..mid].to_vec();
    let mut right = arr[mid..].to_vec();
    merge_sort(&mut left);
    merge_sort(&mut right);
    merge(arr, &left, &right);
}

fn merge(arr: &mut Vec<i32>, left: &[i32], right: &[i32]) {
    let (mut i, mut j, mut k) = (0, 0, 0);
    while i < left.len() && j < right.len() {
        if left[i] <= right[j] {
            arr[k] = left[i];
            i += 1;
        } else {
            arr[k] = right[j];
            j += 1;
        }
        k += 1;
    }
    while i < left.len() {
        arr[k] = left[i];
        i += 1;
        k += 1;
    }
    while j < right.len() {
        arr[k] = right[j];
        j += 1;
        k += 1;
    }
}

fn main() {
    let mut arr = vec![12, 11, 13, 5, 6, 7];
    merge_sort(&mut arr);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n log n)
 *   • Average Case: O(n log n)
 *   • Worst Case: O(n log n)
 */
