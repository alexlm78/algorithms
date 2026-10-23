// Interpolation Search

/*
Theory:

Interpolation Search is an improved variant of binary search for uniformly distributed data.
It estimates the position of the target value based on the value's relation to the endpoints.

Algorithm:
   1. Calculate position: pos = low + ((target - arr[low]) * (high - low) / (arr[high] - arr[low]))
   2. If the target matches the element at the calculated position, return the index.
   3. If the target is smaller, search the left half; otherwise, search the right half.
   4. Repeat until the target is found or the range becomes invalid.
*/

fn interpolation_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut low = 0i32;
    let mut high = arr.len() as i32 - 1;

    while low <= high && target >= arr[low as usize] && target <= arr[high as usize] {
        if low == high {
            if arr[low as usize] == target {
                return Some(low as usize);
            }
            return None;
        }
        let pos = low
            + ((target - arr[low as usize]) * (high - low))
                / (arr[high as usize] - arr[low as usize]);

        if arr[pos as usize] == target {
            return Some(pos as usize);
        }
        if arr[pos as usize] < target {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    None
}

fn main() {
    let arr = vec![10, 12, 13, 16, 18, 19, 21, 23, 24, 33, 35];
    let target = 18;
    match interpolation_search(&arr, target) {
        Some(idx) => println!("Element found at index: {}", idx),
        None => println!("Element not found"),
    }
}

/*
 * Time Complexity:
 *   • Best Case: O(1)
 *   • Average Case: O(log log n)
 *   • Worst Case: O(n)
 */
