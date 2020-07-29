var cat = {
    name:'fluffy',
    activities:['play,eat cat food'],
    catfriends:[
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   };
   cat.name="fluffyy";
   console.log(cat.activities , cat.catfriends[0].activities , cat.catfriends[1].activities);
   