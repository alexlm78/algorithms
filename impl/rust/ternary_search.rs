// Ternary Search

/*
Theory:

Ternary Search is similar to binary search, but instead of dividing the array into two halves,
it divides the array into three parts. It is performed on sorted arrays.

Algorithm:
   1. Divide the array into three parts.
   2. Compare the target with the first and second midpoints.
   3. If the target is equal to any of the midpoints, return the index.
   4. Depending on the comparison, continue searching in one of the three parts.
   5. Repeat the process until the target is found or the range becomes invalid.
*/

fn ternary_search(arr: &[i32], left: usize, right: usize, target: i32) -> Option<usize> {
    if right < left {
        return None;
    }
    let mid1 = left + (right - left) / 3;
    let mid2 = right - (right - left) / 3;

    if arr[mid1] == target {
        return Some(mid1);
    }
    if arr[mid2] == target {
        return Some(mid2);
    }

    if target < arr[mid1] {
        if mid1 == 0 {
            return None;
        }
        ternary_search(arr, left, mid1 - 1, target)
    } else if target > arr[mid2] {
        ternary_search(arr, mid2 + 1, right, target)
    } else {
        ternary_search(arr, mid1 + 1, mid2 - 1, target)
    }
}

fn main() {
    let arr = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let target = 5;
    let len = arr.len();
    match ternary_search(&arr, 0, len - 1, target) {
        Some(idx) => println!("Element found at index: {}", idx),
        None => println!("Element not found"),
    }
}

/*
 * Time Complexity:
 *   • Best Case: O(1)
 *   • Average Case: O(log3 n)
 *   • Worst Case: O(log3 n)
 */
