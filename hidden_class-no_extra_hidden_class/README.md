## Benchmark
 
```
no_extra_hidden
Raw:
 > 192076.92307692306
 > 202954.04595404596
 > 198152.84715284716
 > 193786.21378621378
Average (mean) 196742.5074925075

hidden
Raw:
 > 49947.05294705294
 > 49499.5004995005
 > 34561.43856143856
 > 41767.23276723277
Average (mean) 43943.80619380619

Winner: no_extra_hidden
Compared with next highest (hidden), it's:
77.66% faster
4.48 times as fast
0.65 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Profile summary
 
Tick-hidden
```
 [Summary]:
   ticks  total  nonlib   name
   5795   61.4%   85.9%  JavaScript
    948   10.0%   14.1%  C++
      7    0.1%    0.1%  GC
   2702   28.6%          Shared libraries
```
 
Tick-no_extra_hidden
```
 [Summary]:
   ticks  total  nonlib   name
   6337   66.9%   89.0%  JavaScript
    783    8.3%   11.0%  C++
      6    0.1%    0.1%  GC
   2356   24.9%          Shared libraries
```
 
