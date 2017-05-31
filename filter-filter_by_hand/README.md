## Benchmark
 
```
filterByHand
Raw:
 > 19630.36963036963
 > 19073.926073926075
 > 19090.909090909092
 > 19301.698301698303
Average (mean) 19274.225774225775

filterr
Raw:
 > 1778.2217782217783
 > 1708.2917082917083
 > 1711.2887112887113
 > 1651.3486513486514
Average (mean) 1712.2877122877123

Winner: filterByHand
Compared with next highest (filterr), it's:
91.12% faster
11.26 times as fast
1.05 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```

filterr x 1,689,805 ops/sec ±0.47% (93 runs sampled)
filterByHand x 15,648,376 ops/sec ±0.84% (93 runs sampled)
Fastest is: filterByHand
```
 
