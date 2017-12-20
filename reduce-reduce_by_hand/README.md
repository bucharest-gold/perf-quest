## Benchmark
 
```
reduceByHand
Raw:
 > 60815.18481518482
 > 64654.345654345656
 > 65321.67832167832
 > 55080.919080919084
Average (mean) 61468.03196803197

reducee
Raw:
 > 6384.615384615385
 > 7557.442557442558
 > 7522.477522477522
 > 7461.538461538462
Average (mean) 7231.518481518481

Winner: reduceByHand
Compared with next highest (reducee), it's:
88.24% faster
8.5 times as fast
0.93 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```

reduce x 5,548,795 ops/sec ±3.29% (83 runs sampled)
reduceByHand x 50,913,256 ops/sec ±1.12% (85 runs sampled)
Fastest is: reduceByHand
```
 
