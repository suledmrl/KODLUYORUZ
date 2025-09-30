# Insertion Sort Projesi

## Problem 1

[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

## Problem 2

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.

## Problem 3

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.



## Çözüm 1

Soldan sağa ilerleriz, her yeni elemanı önceki sıralı kısmın içine uygun yere ekleriz.

1. 22 elemanı zaten kendi başına sıralı -> [22,27,16,2,18,6]
2. 27>22; yerinde kalır -> [22,27,16,2,18,6]
3. 16<27; 16 bir sola kayar. - 16<22; 16 en sola kayar. -> [16,22,27,2,18,6]
4. 2<27; 2 bir sola kayar. - 2<22; 2 bir sola kayar. - 2<16; 2 en sola kayar. -> [2,16,22,27,18,6]
5. 18<27; 18 bir sola kayar. - 18<22; 18 bir sola kayar. - 18>16; yerleşir.[2,16,18,22,27,6]
6. 6<27; 6 bir sola kayar. - 6<22; 6 bir sola kayar. - 6<18; 6 bir sola kayar. - 6<16; 6 bir sola kayar. - 6>2; yerleşir.[2,6,16,18,22,27]
7. sonuç -> [2,6,16,18,22,27]

## Çözüm 2

 Big-O gösterimi

 Dizi sıralı olsaydı O(n) olacaktı. Ancak dizi rastgele olduğu için average ve worst case olarak şu an big-o gösterimi -> O(n²)

 Time Complexity:
 
  sıralı dizimiz -> [2,6,16,18,22,27] 
  
  18 sayısı ortada olduğu için average case olur.

  ## Çözüm 3

  [2,3,5,8,7,9,4,15,6]

  Her adımda kalan dizideki en küçük elemanı bulup, bulunduğu pozisyon ile yer değiştiririz.

  1. İlk olarak [7,3,5,8,2,9,4,15,6] 7 elemanı ile başlar. kendisinden sonraki ile karşılaştırıp küçük olanı baz alarak sona kadar devam eder. 7>3 3 daha küçük. 3 elemanını baz alarak 3>5 devam 3>8 devam 3<2 şimdi 2 elemanını baz alır. 2<9 devam ....... 2<6 buna göre en küçük 2. 2 ile 7 elemanı yer değiştirir. -> [2,3,5,8,7,9,4,15,6]
  2. 3 elemanı ile başlar. 3<5 devam ........ 3<6 yerinde kalır. -> [2,3,5,8,7,9,4,15,6]
  3. 5 elemanı ile başlar. 5<8 devam ...... 5>4 şimdi 4 elemanını baz alır. 4<15 devam 4<6. 4 ile 5 yer değiştirir.-> [2,3,4,8,7,9,5,15,6]
  4. 8 elemanı ile başlar. 8>7 şimdi 7 elemanını baz alır. 7<9 devam 7>5 şimdi 5 elemanını baz alır. 5<15 devam 5<6. 8 ile 5 elemanı yer değiştirir. -> [2,3,4,5,7,9,8,15,6]
  
  .
  .
  .
  .

