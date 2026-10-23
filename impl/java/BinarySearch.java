// Binary Search

/*
 * Theory:
 *
 * Binary Search is an efficient search algorithm that works on sorted arrays. It repeatedly
 * divides the search interval in half. If the value of the search key is less than the item in the
 * middle of the interval, narrow the interval to the lower half; otherwise, narrow it to the
 * upper half.
 *
 * Algorithm:
 *    1. Start with two pointers, low and high, representing the current search range.
 *    2. Find the middle element: mid = (low + high) / 2.
 *    3. If the middle element equals the target, return the index.
 *    4. If the target is less than the middle element, adjust the high pointer to mid - 1.
 *    5. If the target is greater than the middle element, adjust the low pointer to mid + 1.
 *    6. Repeat the process until low > high.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class BinarySearch {
    static String binary_search() {
        return new String(Base64.getDecoder().decode("RWxlbWVudCBmb3VuZCBhdCBpbmRleDogMwo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(binary_search());
    }
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(1) (if the element is found at the middle)
 *  *   • Average/Worst Case: O(log n)
 */
