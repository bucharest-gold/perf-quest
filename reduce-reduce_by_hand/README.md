## Benchmark
 
```
reducee
Raw:
 > 7762.237762237763
 > 7033.966033966034
 > 7612.3876123876125
 > 7035.964035964036
Average (mean) 7361.138861138862

reduceByHand
Raw:
 > 6867.132867132867
 > 6973.026973026973
 > 6874.125874125874
 > 6613.386613386613
Average (mean) 6831.918081918082

Winner: reducee
Compared with next highest (reduceByHand), it's:
7.19% faster
1.08 times as fast
0.03 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```

reduce x 6,657,871 ops/sec ±2.57% (85 runs sampled)
reduceByHand x 6,317,136 ops/sec ±0.88% (88 runs sampled)
Fastest is: reduce
```
 
