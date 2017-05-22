## Benchmark
 
```
filterByHand
Raw:
 > 16146.853146853147
 > 16787.212787212786
 > 16784.215784215783
 > 16245.754245754246
Average (mean) 16491.008991008992

filterr
Raw:
 > 1569.4305694305694
 > 1592.4075924075923
 > 1688.3116883116884
 > 1681.3186813186812
Average (mean) 1632.8671328671328

Winner: filterByHand
Compared with next highest (filterr), it's:
90.1% faster
10.1 times as fast
1 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```

filterr x 1,573,626 ops/sec ±2.37% (86 runs sampled)
filterByHand x 14,671,741 ops/sec ±1.51% (87 runs sampled)
Fastest is: filterByHand
```
 
