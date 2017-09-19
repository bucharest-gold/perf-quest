## Benchmark
 
```
filterByHand
Raw:
 > 30897.102897102897
 > 29814.185814185814
 > 30707.29270729271
 > 29727.272727272728
Average (mean) 30286.46353646354

filterr
Raw:
 > 2549.4505494505493
 > 2608.3916083916083
 > 2612.3876123876125
 > 2512.4875124875125
Average (mean) 2570.679320679321

Winner: filterByHand
Compared with next highest (filterr), it's:
91.51% faster
11.78 times as fast
1.07 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```

filterr x 2,737,907 ops/sec ±0.47% (88 runs sampled)
filterByHand x 19,671,238 ops/sec ±0.81% (85 runs sampled)
Fastest is: filterByHand
```
 
