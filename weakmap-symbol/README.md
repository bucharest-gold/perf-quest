## Benchmark
 
```
Symbol
Raw:
 > 185344.65534465536
 > 187344.65534465536
 > 179638.36163836165
 > 187639.36063936065
Average (mean) 184991.75824175825

WeakMap
Raw:
 > 1133.7266470009833
 > 1782.2177822177823
 > 821.6258879242305
 > 1731.2687312687312
Average (mean) 1367.2097621029318

Winner: Symbol
Compared with next highest (WeakMap), it's:
99.26% faster
135.31 times as fast
2.13 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```

WeakMap x 1,169,540 ops/sec ±24.41% (39 runs sampled)
Symbol x 260,063,340 ops/sec ±102.63% (84 runs sampled)
Fastest is: Symbol
```
 
