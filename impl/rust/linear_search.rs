// Linear Search

/*
Theory:

Linear search is a simple search algorithm that checks each element in the array one by one
until the target element is found or the list is exhausted.

Algorithm:
   1. Start from the first element and compare it with the target.
   2. If the element matches the target, return the index.
   3. If the end of the array is reached without finding the target, return None.
*/

fn linear_search(arr: &[i32], target: i32) -> Option<usize> {
    for (i, &val) in arr.iter().enumerate() {
        if val == target {
            return Some(i);
        }
    }
    None
}

fn main() {
    let arr = vec![10, 23, 45, 70, 11, 15];
    let target = 70;
    match linear_search(&arr, target) {
        Some(idx) => println!("Element found at index: {}", idx),
        None => println!("Element not found"),
    }
}

/*
 * Time Complexity:
 *   • Best Case: O(1) (when the target is the first element)
 *   • Average Case: O(n)
 *   • Worst Case: O(n)
 */
