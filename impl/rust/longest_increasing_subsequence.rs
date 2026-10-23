// Longest Increasing Subsequence (LIS)

/*
Theory:

The Longest Increasing Subsequence (LIS) problem involves finding the longest subsequence
of a given sequence where the elements are in sorted order, strictly increasing.

Algorithm:
   1. Create an array dp to store the longest increasing subsequence up to each index.
   2. For each element, compare it with the previous elements to check if it can extend
      the subsequence.
   3. Update the dp array accordingly and find the maximum.
*/

fn lis(arr: &[i32]) -> usize {
    let n = arr.len();
    if n == 0 {
        return 0;
    }
    let mut dp = vec![1usize; n];
    let mut max_len = 1;

    for i in 1..n {
        for j in 0..i {
            if arr[i] > arr[j] && dp[i] < dp[j] + 1 {
                dp[i] = dp[j] + 1;
            }
        }
        if dp[i] > max_len {
            max_len = dp[i];
        }
    }
    max_len
}

fn main() {
    let arr = vec![10, 22, 9, 33, 21, 50, 41, 60];
    println!("Length of LIS: {}", lis(&arr));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n^2)
 *   • Space Complexity: O(n)
 */
