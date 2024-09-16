/**
* Performs comparisons on the time needed to add elements at the
* beginning of a list, and then perform reads of values in the list.
*
* The number n of values to add and read is passed on the command line.
* No error checking is done. The list is initialized deterministically.
*
* To compile: javac compareLists.java
*
* To execute: java compareLists 100000
*
* (C) 2017 Gianluigi Zavattaro
* (https://www.unibo.it/sitoweb/gianluigi.zavattaro)
* Distributed under the CC-zero 1.0 license
* https://creativecommons.org/publicdomain/zero/1.0/
*/

import		java.	util.*;


public class	compareLists {

	/**
	* Populate a list in a determistic way
	*/
	static void	addTest(List < Integer > list, int numAdd){
		int		i;
		int		val = 0;
		for             (i = 0; i < numAdd; i++) {
			list.add(0, (Integer) val);
			val += 17;
			if (val > 100)
				val -= 200;
		}
	}



	/**
        * Get from a list in a determistic way
        */
	static void	getTest(List < Integer > list, int size, int numGet){
		int		i         , j;
		int		val = 0;
		for             (i = 0; i < numGet; i++) {
			j = list.get(val);
			val += 17;
			if (val > size)
				val -= size;
		}
	}

	public static void main(String args[]) {
		long		start_t  , end_t, elapsed, min;
		double		sec;

		if              (args.length != 1) {
			System.err.println("Usage: java compareLists <list length>");
			System.exit(1);
		}
		int		n = Integer.parseInt(args[0]);

		ArrayList < Integer > l1 = new ArrayList < Integer > ();

		start_t = System.currentTimeMillis();
		addTest(l1, n);
		end_t = System.currentTimeMillis();
		elapsed = (end_t - start_t);
		min = elapsed / (60 * 1000);
		sec = (elapsed - min * 60 * 1000) / 1000.0;
		System.out.println("Populate ArrayList: " + min + " min " + sec + " sec");

		start_t = System.currentTimeMillis();
		getTest(l1, n, n);
		end_t = System.currentTimeMillis();
		elapsed = (end_t - start_t);
		min = elapsed / (60 * 1000);
		sec = (elapsed - min * 60 * 1000) / 1000.0;
		System.out.println("Read from ArrayList: " + min + " min " + sec + " sec");



		LinkedList < Integer > l2 = new LinkedList < Integer > ();

		start_t = System.currentTimeMillis();
		addTest(l2, n);
		end_t = System.currentTimeMillis();
		elapsed = (end_t - start_t);
		min = elapsed / (60 * 1000);
		sec = (elapsed - min * 60 * 1000) / 1000.0;
		System.out.println("Populate LinkedList: " + min + " min " + sec + " sec");

		start_t = System.currentTimeMillis();
		getTest(l2, n, n);
		end_t = System.currentTimeMillis();
		elapsed = (end_t - start_t);
		min = elapsed / (60 * 1000);
		sec = (elapsed - min * 60 * 1000) / 1000.0;
		System.out.println("Read from LinkedList: " + min + " min " + sec + " sec");
	}
}
