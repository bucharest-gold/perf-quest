## Benchmark
 
```
reduceByHand
Raw:
 > 80896.1038961039
 > 80282.71728271728
 > 80389.61038961039
 > 80387.61238761239
Average (mean) 80489.01098901099

reducee
Raw:
 > 8778.221778221778
 > 8750.24975024975
 > 8767.232767232766
 > 8729.27072927073
Average (mean) 8756.243756243755

Winner: reduceByHand
Compared with next highest (reducee), it's:
89.12% faster
9.19 times as fast
0.96 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```

reduce x 6,929,760 ops/sec ±0.56% (92 runs sampled)
reduceByHand x 76,266,545 ops/sec ±1.06% (86 runs sampled)
Fastest is: reduceByHand
```
 
