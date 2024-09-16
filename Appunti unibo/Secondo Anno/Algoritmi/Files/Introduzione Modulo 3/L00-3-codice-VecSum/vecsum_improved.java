/**
 * Given an array with n elements, find the nonempty subarray whose
 * sum is maximal. This program implements the brute-force improved O(n^2)
 * algorithm.
 *
 * The array length n is passed on the command line. No error checking
 * is done.
 *
 * To compile: javac vecsum_improved.java
 *
 * To execute: java vecsum_improved 1000
 *
 * (C) 2017 Gianluigi Zavattaro (https://www.unibo.it/sitoweb/gianluigi.zavattaro)
 * Distributed under the CC-zero 1.0 license
 * https://creativecommons.org/publicdomain/zero/1.0/
 *
 */
public class vecsum_improved {

    public static void main( String args[] )
    {
      if ( args.length != 1 ) {
        System.err.println("Usage: java vecsum_improved <array length>");
        System.exit(1);
      }
      int n = Integer.parseInt(args[0]);
      double v[] = new double[n];
      int i,j,k;
      double sum, maxsum, val = 100;
      // Fill array v[] deterministically
      for (i=0; i<v.length; i++) {
        v[i] = val;
        val += 17;
        if ( val > 100 ) val -= 200;
      }

      // Compute the maximum sum across all subvectors
      long start_t = System.currentTimeMillis();
      
      maxsum = v[0];
      for (i=0; i<n; i++) {
        sum = 0.0;
        for (j=i; j<n; j++) {
          sum += v[j];
          if ( sum > maxsum ) maxsum = sum;
        }
      }

      long end_t = System.currentTimeMillis();
      System.out.println("Max sum = " + maxsum);
      long elapsed = (end_t - start_t);
      long min = elapsed / (60*1000);
      double sec = (elapsed -min*60)/1000.0;
      System.out.println("Elapsed time: "+min+" min "+sec+" sec");

    }
}
