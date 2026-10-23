// Bubble Sort

/*
Theory:

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the
list, compares adjacent elements, and swaps them if they are in the wrong order. This
process is repeated until the list is sorted.

It is called Bubble Sort because smaller elements "bubble" to the top of the list, and larger
elements sink to the bottom.

Algorithm:
   1. Start from the first element, compare it with the next element.
   2. If the current element is greater than the next element, swap them.
   3. Move to the next element and repeat the process for all elements.
   4. Continue the process for all elements until no swaps are needed.
*/

fn bubble_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    for i in 0..n - 1 {
        let mut swapped = false;
        for j in 0..n - i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
    }
}

fn main() {
    let mut arr = vec![5, 1, 4, 2, 8];
    bubble_sort(&mut arr);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n) (when the list is already sorted)
 *   • Average Case: O(n²)
 *   • Worst Case: O(n²)
 */
