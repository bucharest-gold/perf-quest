## Benchmark
 
```
reducee
Raw:
 > 8096.903096903097
 > 8092.907092907093
 > 8080.919080919081
 > 7669.3306693306695
Average (mean) 7985.0149850149855

reduceByHand
Raw:
 > 7002.997002997003
 > 6948.051948051948
 > 7091.908091908092
 > 7042.957042957043
Average (mean) 7021.478521478521

Winner: reducee
Compared with next highest (reduceByHand), it's:
12.07% faster
1.14 times as fast
0.06 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```

reduce x 6,969,633 ops/sec ±1.25% (89 runs sampled)
reduceByHand x 6,474,251 ops/sec ±1.24% (91 runs sampled)
Fastest is: reduce
```
 
