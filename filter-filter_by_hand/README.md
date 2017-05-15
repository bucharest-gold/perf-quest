## Benchmark
 
```
filterByHand
Raw:
 > 17075.924075924075
 > 17215.784215784217
 > 17061.93806193806
 > 16786.213786213786
Average (mean) 17034.965034965033

filterr
Raw:
 > 1640.3596403596403
 > 1672.3276723276724
 > 1691.3086913086913
 > 1592.4075924075923
Average (mean) 1649.1008991008991

Winner: filterByHand
Compared with next highest (filterr), it's:
90.32% faster
10.33 times as fast
1.01 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
filterr x 1,631,328 ops/sec ±0.63% (92 runs sampled)
filterByHand x 15,225,074 ops/sec ±0.88% (89 runs sampled)
Fastest is: filterByHand
[null]
```
 
## Profile summary
 
Tick-filter
```
 [Summary]:
   ticks  total  nonlib   name
   3280   35.0%   35.1%  JavaScript
   5425   57.9%   58.1%  C++
    369    3.9%    4.0%  GC
     38    0.4%          Shared libraries
```
 
Tick-filter_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   7946   84.9%   87.0%  JavaScript
    508    5.4%    5.6%  C++
    309    3.3%    3.4%  GC
    222    2.4%          Shared libraries
```
 
