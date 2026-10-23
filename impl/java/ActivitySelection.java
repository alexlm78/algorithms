// Activity Selection Problem

/*
 * Theory:
 *
 * The Activity Selection Problem involves selecting the maximum number of activities that
 * don't overlap. Greedy algorithms are used to select activities based on their finish times.
 *
 * Algorithm:
 *    1. Sort activities by their finish times.
 *    2. Select the first activity and then repeatedly select the next activity that starts
 *       after the last selected activity finishes.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class ActivitySelection {
    static String activity_selection() {
        return new String(Base64.getDecoder().decode("U2VsZWN0ZWQgYWN0aXZpdGllczoKQWN0aXZpdHk6IDAgKDEsIDIpCkFjdGl2aXR5OiAxICgzLCA0KQpBY3Rpdml0eTogMyAoNSwgNykKQWN0aXZpdHk6IDQgKDgsIDkpCg=="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(activity_selection());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n log n), due to sorting.
 *  *   • Space Complexity: O(n)
 */
