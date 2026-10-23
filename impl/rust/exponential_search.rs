// Exponential Search

/*
Theory:

Exponential Search works on sorted arrays and is useful when the size of the array is not
known in advance. It first finds a range where the target might be and then uses binary
search within that range.

Algorithm:
   1. Start with an index of 1 and double the index in each step until you find an index
      such that the value at that index is greater than the target.
   2. Perform a binary search in the range [previous_index, current_index].
*/

fn binary_search(arr: &[i32], low: usize, high: usize, target: i32) -> Option<usize> {
    let mut lo = low as i32;
    let mut hi = high as i32;
    while lo <= hi {
        let mid = lo + (hi - lo) / 2;
        if arr[mid as usize] == target {
            return Some(mid as usize);
        }
        if arr[mid as usize] < target {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    None
}

fn exponential_search(arr: &[i32], target: i32) -> Option<usize> {
    let n = arr.len();
    if n == 0 {
        return None;
    }
    if arr[0] == target {
        return Some(0);
    }

    let mut i = 1;
    while i < n && arr[i] <= target {
        i *= 2;
    }
    binary_search(arr, i / 2, (i).min(n - 1), target)
}

fn main() {
    let arr = vec![10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let target = 70;
    match exponential_search(&arr, target) {
        Some(idx) => println!("Element found at index: {}", idx),
        None => println!("Element not found"),
    }
}

/*
 * Time Complexity:
 *   • Best Case: O(1)
 *   • Average Case: O(log n)
 *   • Worst Case: O(log n)
 */
