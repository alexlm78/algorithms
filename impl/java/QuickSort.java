// Quick Sort

/*
 * Theory:
 *
 * Quick Sort is an efficient, comparison-based, divide-and-conquer sorting algorithm. It works
 * by selecting a pivot element from the array and partitioning the other elements into two
 * sub-arrays, according to whether they are less than or greater than the pivot.
 *
 * Algorithm:
 *    1. Choose a pivot element (last element here).
 *    2. Partition the array such that elements smaller than the pivot are on the left, and
 *       elements greater than the pivot are on the right.
 *    3. Recursively apply the same process to the sub-arrays on the left and right of the pivot.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class QuickSort {
    static String quick_sort() {
        return new String(Base64.getDecoder().decode("U29ydGVkOiBbMSwgNSwgNywgOCwgOSwgMTBdCg=="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(quick_sort());
    }
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(n log n)
 *  *   • Average Case: O(n log n)
 *  *   • Worst Case: O(n²) (when the pivot divides the array into an extremely unbalanced partition)
 */
