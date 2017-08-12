## Benchmark
 
```
reduceByHand
Raw:
 > 62726.27372627373
 > 63051.94805194805
 > 63143.856143856145
 > 62047.95204795205
Average (mean) 62742.50749250749

reducee
Raw:
 > 6826.1738261738265
 > 6592.407592407592
 > 6452.547452547453
 > 6357.642357642358
Average (mean) 6557.192807192808

Winner: reduceByHand
Compared with next highest (reducee), it's:
89.55% faster
9.57 times as fast
0.98 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```

reduce x 5,270,044 ops/sec ±1.09% (85 runs sampled)
reduceByHand x 54,018,195 ops/sec ±1.11% (83 runs sampled)
Fastest is: reduceByHand
```
 
