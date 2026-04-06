// Data Improted into the Javascript //
// import { tweetsData } from './data.js'

// Data //
const tweetsData = [   
    {
        handle: `@TrollBot66756542 💎`,
        profilePic: `images/troll.jpg`,
        likes: 27,
        retweets: 10,
        tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },    
    {
        handle: `@Elon ✅`,
        profilePic: `images/musk.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
                  {
                handle: `@TomCruise ✅`,
                profilePic: `images/tcruise.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
                  {
                handle: `@ChuckNorris ✅`,
                profilePic: `images/chucknorris.jpeg`,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
        {
        handle: `@NoobCoder12`,
        profilePic: `images/flower.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: `images/overflow.png`,
                tweetText: `No. Onviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `images/love.png`,
                tweetText: `You are wonderful just as you are! ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },     
]


// Taking Control of ID's //
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')


// Listening to Event //
tweetBtn.addEventListener('click', function(){
   console.log(tweetInput.value)
})


// Filtering tweetObj //
const tweetObj = tweetsData.filter(function(tweet){
   return tweet
})


// Filtering tweetObjReplies //
const tweetObjReplies = tweetsData.filter(function(tweet){
   return tweet.replies
})[0]

// function count for like or retweet //
const commentBtn = document.getElementById("comment-btn")
const likeBtn = document.getElementById("like-btn")
const retweetBtn = document.getElementById("retweet-btn")

document.addEventListener('click', function(e){
   
   // Like funtion //
   if (e.target.document.getElementById("like-btn")){
      if (!tweetObj.isLiked){
         tweetObj.likes++
      } else { tweetObj.likes-- }
         tweetObj.isLiked = !tweetObj.isLiked
         
   }

   // Retweet funtion //
   if (e.target.document.getElementById("retweet-btn")){
      if (!tweetObj.isRetweeted){
         tweetObj.retweets++
      } else { tweetObj.retweets-- }
         tweetObj.isRetweeted = !tweetObj.isRetweeted
         
   }

   // comment funtion //
   if (e.target.document.getElementById("comment-btn")){
      if (!tweetObj.isLiked){
         tweetObj.likes++
      } else { tweetObj.likes++ }
         tweetObj.isLiked = !tweetObj.isLiked
         
   }

})

// Only 1 FeedHTML //
const feed = document.getElementById('feed')
function getFeedHTML() {
   let feedHTML = ''
   tweetsData.forEach(function(tweets){
      feedHTML += 
         `<div class="tweet">
            <div class="tweet-inner">
               <img src=${tweets.profilePic} class="profile-pic">
               <div>
                     <p class="handle">${tweets.handle}</p>
                     <p class="tweet-text">${tweets.tweetText}</p>
                     <div class="tweet-details">
                        <i class="fa-regular fa-comment-dots" id="comment-btn"></i>
                        <span class="tweet-detail">
                           ${tweets.replies.length}
                        </span>
                        <i class="fa-regular fa-heart" id="like-btn"></i>
                        <span class="tweet-detail">
                           ${tweets.likes}
                        </span>
                        <i class="fa-solid fa-retweet" id="retweet-btn"></i>
                        <span class="tweet-detail">
                           ${tweets.retweets}
                        </span>
                     </div>   
               </div>            
            </div>
         </div>`
   })
   return feedHTML
}


// Function render() //
function render(){
   feed.innerHTML = getFeedHTML()
}


// Calling function render () //
render()

