// Heap Sort

/*
Theory:

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
It is similar to selection sort, where the maximum element is selected and placed at the
end of the array. The key idea is to use a heap to find the maximum efficiently.

Algorithm:
   1. Build a max-heap from the input data.
   2. At each step, remove the largest element from the heap (which is the root) and
      rebuild the heap.
   3. Repeat the process until the heap is empty.
*/

fn heapify(arr: &mut Vec<i32>, n: usize, i: usize) {
    let mut largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if left < n && arr[left] > arr[largest] {
        largest = left;
    }
    if right < n && arr[right] > arr[largest] {
        largest = right;
    }
    if largest != i {
        arr.swap(i, largest);
        heapify(arr, n, largest);
    }
}

fn heap_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    // Build max heap
    for i in (0..n / 2).rev() {
        heapify(arr, n, i);
    }
    // Extract elements one by one
    for i in (1..n).rev() {
        arr.swap(0, i);
        heapify(arr, i, 0);
    }
}

fn main() {
    let mut arr = vec![12, 11, 13, 5, 6, 7];
    heap_sort(&mut arr);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n log n)
 *   • Average Case: O(n log n)
 *   • Worst Case: O(n log n)
 */
