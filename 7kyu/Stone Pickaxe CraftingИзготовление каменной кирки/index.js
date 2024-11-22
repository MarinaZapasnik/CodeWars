// Примечание. Основано на Minecraft. Надеемся, вы хотя бы знаете эту игру!

// Сюжет: Вы хотите создать гигантскую шахту, но вы немного скупы на железо и алмазы и не станете добывать весь камень железными или алмазными кирками. Вместо этого вы полагаетесь на менее прочные, но более дешевые каменные кирки! Однако вам понадобится много каменных кирок, поскольку они ломаются быстрее, чем алмазные или железные, поэтому вам нужно выяснить, сколько каменных кирок вы можете изготовить, прежде чем у вас закончатся палки и булыжники. К сожалению, вы неорганизованный человек и оставляете все свои материалы в одном сундуке со случайным хламом, который нужно фильтровать.

// Задача: Учитывая массив, верните максимальное количество каменных кирок, которое вы можете изготовить, прежде чем у вас закончатся палки и булыжники. Внутри массива будет ряд строк с точными названиями материалов, перечисленных ниже. Если в массиве есть хотя бы 3 «Булыжника» и 2 «Палки», вы можете изготовить уникальную каменную кирку. Не считайте никакие материалы, кроме «Булыжников», «Палок» и «Дерева». Дерево можно превратить в 4 палки!

// Вот материалы, которые вы ожидаете увидеть в массиве:

// Sticks
// Cobblestone
// Stone (These are different from cobblestone and cannot be used to make a stone pickaxe.)
// Wool
// Dirt
// Wood (Can be treated as sticks, typically 4 sticks for 1 wood)
// Diamond
// Размеры массива рандомизированы и варьируются от 1 до 200 со случайным содержимым.

//SOLUTION

function stonePick(arr) {
    let sticksCount = 0;
    let cobblestoneCount = 0;
    let woodCount = 0;
    let pickaxe = 0;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === 'Sticks') {
            sticksCount = sticksCount + 1;
        } 
        if (arr[i] === 'Cobblestone') {
            cobblestoneCount = cobblestoneCount + 1;
        }
        if (arr[i] === 'Wood') {
            woodCount = woodCount + 1;
        }
    }
    sticksCount = sticksCount + woodCount * 4;
    alert (sticksCount);
    while (cobblestoneCount >= 3 && sticksCount >= 2) {
        pickaxe = pickaxe + 1;
        cobblestoneCount = cobblestoneCount - 3;
        sticksCount = sticksCount - 2;

    }
    return(pickaxe);
    
    //return 0;
  }

  window.alert (stonePick(['Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone','Cobblestone','Cobblestone','Wood', 'Cobblestone']));