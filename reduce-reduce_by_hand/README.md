## Benchmark
 
```
reducee
Raw:
 > 7857.142857142857
 > 7994.005994005994
 > 7635.364635364635
 > 7950.04995004995
Average (mean) 7859.140859140859

reduceByHand
Raw:
 > 6250.749250749251
 > 6669.3306693306695
 > 6728.2717282717285
 > 6172.827172827173
Average (mean) 6455.294705294705

Winner: reducee
Compared with next highest (reduceByHand), it's:
17.86% faster
1.22 times as fast
0.09 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```

reduce x 7,323,182 ops/sec ±1.10% (88 runs sampled)
reduceByHand x 6,174,494 ops/sec ±1.47% (84 runs sampled)
Fastest is: reduce
```
 
