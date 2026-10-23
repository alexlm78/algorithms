// Counting Sort

/*
Theory:

Counting Sort is a non-comparison-based sorting algorithm. It counts the occurrences of
each unique element in the input array. The counts are then used to place the elements
in the correct position in the sorted array.

Algorithm:
   1. Find the maximum value in the array.
   2. Create a count array to store the count of each unique value.
   3. Calculate the cumulative count to determine the position of each element.
   4. Build the sorted array using the count array.
*/

fn counting_sort(arr: &mut Vec<i32>) {
    if arr.is_empty() {
        return;
    }
    let max = *arr.iter().max().unwrap() as usize;
    let mut count = vec![0usize; max + 1];

    for &val in arr.iter() {
        count[val as usize] += 1;
    }

    let mut index = 0;
    for i in 0..=max {
        while count[i] > 0 {
            arr[index] = i as i32;
            index += 1;
            count[i] -= 1;
        }
    }
}

fn main() {
    let mut arr = vec![4, 2, 2, 8, 3, 3, 1];
    counting_sort(&mut arr);
    println!("Sorted: {:?}", arr);
}

/*
 * Time Complexity:
 *   • Best Case: O(n + k) (where k is the range of the input)
 *   • Average Case: O(n + k)
 *   • Worst Case: O(n + k)
 */
