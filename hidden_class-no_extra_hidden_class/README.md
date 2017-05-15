## Benchmark
 
```
no_extra_hidden
Raw:
 > 166151.84815184816
 > 156482.5174825175
 > 156166.83316683318
 > 155555.44455544456
Average (mean) 158589.16083916085

hidden
Raw:
 > 155446.55344655344
 > 150092.9070929071
 > 152978.02197802198
 > 149158.84115884115
Average (mean) 151919.0809190809

Winner: no_extra_hidden
Compared with next highest (hidden), it's:
4.21% faster
1.04 times as fast
0.02 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
hidden x 94,371,755 ops/sec ±1.85% (88 runs sampled)
no_extra_hidden x 94,745,086 ops/sec ±0.91% (91 runs sampled)
Fastest is: no_extra_hidden,hidden
[null]
```
 
## Profile summary
 
Tick-hidden
```
 [Summary]:
   ticks  total  nonlib   name
   6536   69.7%   85.8%  JavaScript
    398    4.2%    5.2%  C++
      6    0.1%    0.1%  GC
   1758   18.7%          Shared libraries
```
 
Tick-no_extra_hidden
```
 [Summary]:
   ticks  total  nonlib   name
   6623   70.7%   86.0%  JavaScript
    406    4.3%    5.3%  C++
      8    0.1%    0.1%  GC
   1668   17.8%          Shared libraries
```
 
