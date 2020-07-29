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
   cat.catfriends[0].activities.push=['play','catch rat']
   cat.catfriends[1].activities.push=['run','dance']
   console.log(cat.catfriends[0].activities , cat.catfriends[1].activities);
   