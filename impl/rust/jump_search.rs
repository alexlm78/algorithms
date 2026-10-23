// Jump Search

/*
Theory:

Jump Search is a search algorithm for sorted arrays. It works by jumping ahead by a fixed
number of steps (block size), and once it finds a block where the target might be, it performs
a linear search within that block.

Algorithm:
   1. Jump ahead by a fixed block size (sqrt(n)).
   2. When the block where the target might be is found, perform a linear search within
      that block.
   3. If the target is found, return the index; otherwise, return None.
*/

fn jump_search(arr: &[i32], target: i32) -> Option<usize> {
    let n = arr.len();
    if n == 0 {
        return None;
    }
    let step = (n as f64).sqrt() as usize;
    let mut prev = 0;
    let mut curr = step;

    while curr < n && arr[curr.min(n) - 1] < target {
        prev = curr;
        curr += step;
        if prev >= n {
            return None;
        }
    }

    for i in prev..curr.min(n) {
        if arr[i] == target {
            return Some(i);
        }
    }
    None
}

fn main() {
    let arr = vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let target = 8;
    match jump_search(&arr, target) {
        Some(idx) => println!("Element found at index: {}", idx),
        None => println!("Element not found"),
    }
}

/*
 * Time Complexity:
 *   • Best Case: O(1)
 *   • Average Case: O(√n)
 *   • Worst Case: O(√n)
 */
