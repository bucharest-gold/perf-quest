## Benchmark
 
```
class
Raw:
 > 150787.21278721277
 > 149499.5004995005
 > 150046.95304695304
 > 151741.25874125873
Average (mean) 150518.73126873127

classless
Raw:
 > 24446.553446553447
 > 23523.476523476522
 > 23070.929070929073
 > 23272.727272727272
Average (mean) 23578.421578421578

Winner: class
Compared with next highest (classless), it's:
84.34% faster
6.38 times as fast
0.81 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```
class x 93,455,371 ops/sec ±0.92% (91 runs sampled)
unfrozenclassless x 20,197,160 ops/sec ±0.73% (89 runs sampled)
Fastest is: class
[null]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6658   71.1%   85.7%  JavaScript
    396    4.2%    5.1%  C++
      5    0.1%    0.1%  GC
   1598   17.1%          Shared libraries
```
 
Tick-unfrozenclassless
```
 [Summary]:
   ticks  total  nonlib   name
   7190   76.8%   79.7%  JavaScript
   1187   12.7%   13.2%  C++
    323    3.5%    3.6%  GC
    339    3.6%          Shared libraries
```
 
