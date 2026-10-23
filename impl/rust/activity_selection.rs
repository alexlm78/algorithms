// Activity Selection Problem

/*
Theory:

The Activity Selection Problem involves selecting the maximum number of activities that
don't overlap. Greedy algorithms are used to select activities based on their finish times.

Algorithm:
   1. Sort activities by their finish times.
   2. Select the first activity and then repeatedly select the next activity that starts
      after the last selected activity finishes.
*/

fn activity_selection(start: &[i32], end: &[i32]) {
    let n = start.len();
    let mut indices: Vec<usize> = (0..n).collect();
    indices.sort_by_key(|&i| end[i]);

    println!("Selected activities:");
    let mut last_end = i32::MIN;
    for i in indices {
        if start[i] >= last_end {
            println!("Activity: {} ({}, {})", i, start[i], end[i]);
            last_end = end[i];
        }
    }
}

fn main() {
    let start = vec![1, 3, 0, 5, 8, 5];
    let end = vec![2, 4, 6, 7, 9, 9];
    activity_selection(&start, &end);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n log n), due to sorting.
 *   • Space Complexity: O(n)
 */
