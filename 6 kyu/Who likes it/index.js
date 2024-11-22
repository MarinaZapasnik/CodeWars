// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//SOLUTION

function likes(names) {
    let namesCount = names.length;
    let likeStr = 'like this';
    
    if (namesCount === 1) {
        return `${names[0]} likes this`;
    }
    if (namesCount === 2) {
        return `${names[0]} and ${names[1]} ${likeStr}`
    }
    if (namesCount === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} ${likeStr}`
    }
    if (namesCount >= 4) {
        return `${names[0]}, ${names[1]} and ${namesCount - 2} others ${likeStr}`
    }
    return 'no one likes this'
}