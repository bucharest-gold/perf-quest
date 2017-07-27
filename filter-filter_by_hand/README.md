## Benchmark
 
```
filterByHand
Raw:
 > 17564.435564435564
 > 18424.575424575425
 > 12066.933066933067
 > 19456.543456543455
Average (mean) 16878.121878121878

filterr
Raw:
 > 1701.2987012987012
 > 1662.3376623376623
 > 1640.3596403596403
 > 1478.5214785214785
Average (mean) 1620.6293706293707

Winner: filterByHand
Compared with next highest (filterr), it's:
90.4% faster
10.41 times as fast
1.02 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```

filterr x 1,693,547 ops/sec ±0.87% (92 runs sampled)
filterByHand x 14,077,073 ops/sec ±4.40% (79 runs sampled)
Fastest is: filterByHand
```
 
