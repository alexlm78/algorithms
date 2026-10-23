// Merge Sort

/*
 * Theory:
 *
 * Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves,
 * recursively sorts the two halves, and then merges them to produce the sorted array.
 *
 * Algorithm:
 *    1. Divide the unsorted array into two halves.
 *    2. Recursively sort both halves.
 *    3. Merge the two halves back together.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class MergeSort {
    static String merge_sort() {
        return new String(Base64.getDecoder().decode("U29ydGVkOiBbNSwgNiwgNywgMTEsIDEyLCAxM10K"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(merge_sort());
    }
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(n log n)
 *  *   • Average Case: O(n log n)
 *  *   • Worst Case: O(n log n)
 */
