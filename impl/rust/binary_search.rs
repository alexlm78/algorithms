// Binary Search

/*
Theory:

Binary Search is an efficient search algorithm that works on sorted arrays. It repeatedly
divides the search interval in half. If the value of the search key is less than the item in the
middle of the interval, narrow the interval to the lower half; otherwise, narrow it to the
upper half.

Algorithm:
   1. Start with two pointers, low and high, representing the current search range.
   2. Find the middle element: mid = (low + high) / 2.
   3. If the middle element equals the target, return the index.
   4. If the target is less than the middle element, adjust the high pointer to mid - 1.
   5. If the target is greater than the middle element, adjust the low pointer to mid + 1.
   6. Repeat the process until low > high.
*/

fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut low = 0usize;
    let mut high = arr.len().saturating_sub(1);

    while low <= high {
        let mid = low + (high - low) / 2;
        if arr[mid] == target {
            return Some(mid);
        } else if arr[mid] < target {
            low = mid + 1;
        } else {
            if mid == 0 {
                break;
            }
            high = mid - 1;
        }
    }
    None
}

fn main() {
    let arr = vec![1, 3, 5, 7, 9, 11];
    let target = 7;
    match binary_search(&arr, target) {
        Some(idx) => println!("Element found at index: {}", idx),
        None => println!("Element not found."),
    }
}

/*
 * Time Complexity:
 *   • Best Case: O(1) (if the element is found at the middle)
 *   • Average/Worst Case: O(log n)
 */
