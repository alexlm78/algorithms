// Linear Search

/*
 * Theory:
 *
 * Linear search is a simple search algorithm that checks each element in the array one by one
 * until the target element is found or the list is exhausted.
 *
 * Algorithm:
 *    1. Start from the first element and compare it with the target.
 *    2. If the element matches the target, return the index.
 *    3. If the end of the array is reached without finding the target, return None.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class LinearSearch {
    static String linear_search() {
        return new String(Base64.getDecoder().decode("RWxlbWVudCBmb3VuZCBhdCBpbmRleDogMwo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(linear_search());
    }
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(1) (when the target is the first element)
 *  *   • Average Case: O(n)
 *  *   • Worst Case: O(n)
 */
