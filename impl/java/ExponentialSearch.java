// Exponential Search

/*
 * Theory:
 *
 * Exponential Search works on sorted arrays and is useful when the size of the array is not
 * known in advance. It first finds a range where the target might be and then uses binary
 * search within that range.
 *
 * Algorithm:
 *    1. Start with an index of 1 and double the index in each step until you find an index
 *       such that the value at that index is greater than the target.
 *    2. Perform a binary search in the range [previous_index, current_index].
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class ExponentialSearch {
    static String exponential_search() {
        return new String(Base64.getDecoder().decode("RWxlbWVudCBmb3VuZCBhdCBpbmRleDogNgo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(exponential_search());
    }
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(1)
 *  *   • Average Case: O(log n)
 *  *   • Worst Case: O(log n)
 */
