## Benchmark
 
```
reducee
Raw:
 > 8084.915084915085
 > 7828.171828171829
 > 7758.241758241758
 > 7762.237762237763
Average (mean) 7858.391608391608

reduceByHand
Raw:
 > 6865.134865134865
 > 6891.108891108891
 > 6913.086913086913
 > 6688.311688311688
Average (mean) 6839.41058941059

Winner: reducee
Compared with next highest (reduceByHand), it's:
12.97% faster
1.15 times as fast
0.06 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```

reduce x 7,070,316 ops/sec ±0.45% (90 runs sampled)
reduceByHand x 6,538,511 ops/sec ±0.79% (90 runs sampled)
Fastest is: reduce
```
 
