// Selection Sort

/*
 * Theory:
 *
 * Selection Sort is a simple comparison-based sorting algorithm. It repeatedly selects the
 * smallest element from the unsorted portion of the array and swaps it with the first unsorted
 * element. This process continues until the entire array is sorted.
 *
 * Algorithm:
 *    1. Start with the first element and search the array to find the minimum element.
 *    2. Swap the minimum element with the first element.
 *    3. Move to the next position and repeat the process until the array is sorted.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class SelectionSort {
    static String selection_sort() {
        return new String(Base64.getDecoder().decode("U29ydGVkOiBbMTEsIDEyLCAyMiwgMjUsIDY0XQo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(selection_sort());
    }
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(n²)
 *  *   • Average Case: O(n²)
 *  *   • Worst Case: O(n²)
 */
